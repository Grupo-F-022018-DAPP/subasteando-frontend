import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AuctionService } from '../auction.service';
import { Auction } from '../auctions/auction'

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {

  auction: Auction = {
    id: "",
    title: "",
    description: "",
    pictures: [],
    owner: null,
    initialPrice: null,
    startDate: null,
    endDate: null,
    state: "New",
    biddings: [],
    actualPrice: null
  }

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
  }

  saveAuction(auctionForm: NgForm) {
    this.auctionService.saveAuction(this.auction);
  }

}
