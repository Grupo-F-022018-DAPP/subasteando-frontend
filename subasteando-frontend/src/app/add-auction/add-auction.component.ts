import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { AuctionService } from '../auction.service';
import { Auction } from '../auctions/auction'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {

  @ViewChild('endDateID') dateInput: ElementRef;


    minDate: Date;
    endMinDate: Date;

  auction: Auction = {
    id: null,
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

  constructor(private auctionService: AuctionService) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    console.log(tomorrow);
    this.minDate = tomorrow;
    this.endMinDate = new Date();

   }

  ngOnInit() {
  }

  saveAuction(auctionForm: NgForm) {
    console.log(this.auction)
    this.auctionService.saveAuction(this.auction);
  }

  dateChanged(event) {
    console.log(event);
    if (event !== null) {
      const newDate = new Date(event.getTime());
      var twoDaysFromDate = newDate.setDate(newDate.getDate() + 2);
      var datePipe = new DatePipe('en-US');
      var formattedDate = datePipe.transform(twoDaysFromDate, 'MM/dd/yyyy');
      var finalDate = new Date(formattedDate);
      this.endMinDate = finalDate;
      this.dateInput.nativeElement.value = "";
    }
    return event;
  }

}
