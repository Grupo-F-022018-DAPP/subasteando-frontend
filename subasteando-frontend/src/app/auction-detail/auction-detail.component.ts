import { Component, OnInit } from '@angular/core';
import { Auction } from '../auctions/auction'
import { AuctionService } from '../auction.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent implements OnInit {

  auction: Auction;
  //auction = 5;

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAuction();
  }

  getAuction(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.auctionService.getAuction(id)
    .subscribe(auction => this.auction = auction);
  }

}
