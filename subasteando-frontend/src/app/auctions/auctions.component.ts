import { Component, OnInit } from '@angular/core';
import { AUCTIONS } from '../mock-auction';
import { Auction } from './auction'
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


  constructor(private auctionService: AuctionService, private route: ActivatedRoute) {
    this.pageSize = 5;
  //  this.hasNext = true;
   }

  ngOnInit() {
    this.getAuctions();
    this.currentPage =  this.getCurrentPage();
  }


  getAuctions(): void {
    this.currentPage = +this.route.snapshot.paramMap.get('page');
    this.auctionService.getAuctions(this.currentPage)
        .subscribe(auctions => {
          this.auctions = auctions
          this.hasNext = this.hasNextPage(this.auctions.length);
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

}
