import { Component, OnInit } from '@angular/core';
import { Auction } from '../auctions/auction'
import { AuctionService } from '../auction.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuctionDetailService } from './auction-detail.service'

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent implements OnInit {

  auction: Auction;

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionDetailService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAuction();
  }

  getAuction(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.auctionService.getAuction(id)
    .subscribe(auction => {
      console.log(auction);
      this.auction = auction}); 
  }

  totalBiddings(auction): number {
    return auction.biddings.length;
  }

  priceOfLastBidding(auction): string {
    return auction.biddings[this.totalBiddings(auction) - 1].price;
  }


}
