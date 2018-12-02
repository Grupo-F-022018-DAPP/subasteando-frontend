import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.getRecentAuctions();
  }

  getRecentAuctions(): void {
    this.auctionService.getRecentAuctions()
        .subscribe(auctions => {
          console.log(auctions);
          this.auctions = auctions
        });
  }

}
