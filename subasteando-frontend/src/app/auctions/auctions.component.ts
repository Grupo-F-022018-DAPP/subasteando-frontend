import { Component, OnInit } from '@angular/core';
import { AUCTIONS } from '../mock-auction';
import { Auction } from './auction'
import { User } from '../users/user'
import { AuctionService } from '../auction.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  auction: Auction;
  auctions: Auction[];
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number;
  ownerIds: number[];
  owners: User[];
  stateFilter: string;


  constructor(private auctionService: AuctionService, private route: ActivatedRoute) {
    this.pageSize = 3;
   }

  ngOnInit() {
    this.getAuctions();
    this.currentPage =  this.getCurrentPage();
  }


  getAuctions(): void {
    this.currentPage = +this.route.snapshot.paramMap.get('page');
    this.auctionService.getAuctions(this.currentPage)
        .subscribe(auctionss => {
          console.log(auctionss);
          var auctions = auctionss.content
          this.ownerIds = auctions.map(function(x) { return x["ownerId"] });
          this.auctions = auctions;
          this.hasNext = !auctionss.last;
          this.hasPrevious = this.hasPreviousPage(this.currentPage)
        });
  }

//////

getCurrentPage(): number {
  const id = this.route.snapshot.paramMap.get('page');
  return +id;
}

getNextPage(): number {
  return +this.getCurrentPage() + 1;
}

getPreviousPage(): number {
  return +this.getCurrentPage() - 1;
}

hasNextPage(currentSize): boolean {
  // console.log(`${currentSize} < ${this.pageSize} = ${currentSize == this.pageSize}`)
  const canGoNext = currentSize == this.pageSize;
  return canGoNext;
}

hasPreviousPage(currentPage): boolean {
  const canGoBack = currentPage > 0;
  return canGoBack;
}
// //////
// allStates(): void {
//   this.stateFilter = "";
// }
//
// finishedStates(): void {
//   this.stateFilter = "Finished";
// }
//
// inProgressStates(): void {
//   this.stateFilter = "InProgress";
// }

}
