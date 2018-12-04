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
  bidded: boolean;

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionDetailService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.bidded = false;
    this.getAuction();
    this.getBids();
  //  this.manualBid();
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
        bids.sort((a, b) => {
          return +a.id - +b.id;
        });
        console.log(bids);
        this.bids = bids
      });
  }

  manualBid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const userId = 17;
    this.auctionService.postManualBids(id, userId)
      .subscribe(bidss => {
        this.bidded = true;
        this.bids.push(bidss)
      });
  }

  nameAndSurname(bid: Bid, bids: Bid[]): string {
    var name = "";
    if bid.user == bid.userId {
      var name_bid = bids.find(function(b) {
              return bid.user == b.user.id
            });
      name = `${name_bid.user.name} ${name_bid.user.surname}`
    }
    else {
      name = `${bid.user.name} ${bid.user.surname}`
    }
    return name;
  }

  canBid(auction: Auction): boolean {
    return auction.auctionState.name == "InProgress";
  }

}
