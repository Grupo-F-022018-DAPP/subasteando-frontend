import { Component, OnInit } from '@angular/core';
import { Auction } from '../auctions/auction'
import { AuctionService } from '../auction.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuctionDetailService } from './auction-detail.service'
import { Bid } from '../bids/bid'

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css', '../app.component.css', '../auctions/auctions.component.css']
})
export class AuctionDetailComponent implements OnInit {

  auction: Auction;
  bids: Bid[];
  bidsLength: number;

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionDetailService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAuction();
    this.getBids();
  }

  getAuction(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.auctionService.getAuction(id)
    .subscribe(auction => {
      console.log(auction);
      this.auction = auction});
  }

  getBids(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.auctionService.getBids(id)
      .subscribe(bids => {
        this.bidsLength = bids.length;
        console.log(this.bidsLength);
        this.bids = bids});

  }

  totalBiddings(auction): number {
    return auction.biddings.length;
  }

  priceOfLastBidding(auction): string {
    return auction.biddings[this.totalBiddings(auction) - 1].price;
  }


}
