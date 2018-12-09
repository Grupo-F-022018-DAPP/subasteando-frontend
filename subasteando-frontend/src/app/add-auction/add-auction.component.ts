import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'
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
    actualPrice: null,
    endTime: ""

  }

  constructor(private auctionService: AuctionService) {
    this.minDate = new Date();
    this.endMinDate = new Date();

   }

  ngOnInit() {
  }

  saveAuction(auctionForm: NgForm) {
    this.auctionService.saveAuction(this.auction);
  }

  dateChanged(event) {
    if (event !== null) {
      console.log(event);
      console.log("aaaaa");
      var newDate = event;
      var twoDaysFromDate = newDate.setDate(newDate.getDate() + 2);
      var datePipe = new DatePipe('en-US');
      var formattedDate = datePipe.transform(twoDaysFromDate, 'MM/dd/yyyy');
      var finalDate = new Date(formattedDate);
      this.endMinDate = finalDate;
      this.dateInput.nativeElement.value = "";
    }
  }

}
