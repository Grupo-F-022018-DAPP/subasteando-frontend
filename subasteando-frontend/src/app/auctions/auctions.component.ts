import { Component, OnInit } from '@angular/core';
import { AUCTIONS } from '../mock-auction';
import { Auction } from './auction'
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  auction: Auction;
  auctions: Auction[];

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.getAuctions();
  }

  getAuctions(): void {
  this.auctionService.getAuctions()
      .subscribe(auctions =>
        this.auctions = auctions);

}

}
