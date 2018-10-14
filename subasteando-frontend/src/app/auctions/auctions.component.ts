import { Component, OnInit } from '@angular/core';
import { AUCTIONS } from '../mock-auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  auctions = AUCTIONS;

  constructor() { }

  ngOnInit() {
  }

}
