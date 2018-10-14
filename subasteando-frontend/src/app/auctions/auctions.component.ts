import { Component, OnInit } from '@angular/core';
import { Hero } from '../auctions'

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  auction: Auction = {
    id: 1;
    title: "Jarron de la dinastia Ming";
    description: "Pero que lindo jarroncito! No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza.";
    //pictures: string; es una lista
    initialPrice: 1000;
    // fechas
    //startDate: string;
    //endDate: string;
    state: "En progreso";
    // list of biddings
    //biddings: string;
    actualPrice: 1100;
  }

  constructor() { }

  ngOnInit() {
  }

}
