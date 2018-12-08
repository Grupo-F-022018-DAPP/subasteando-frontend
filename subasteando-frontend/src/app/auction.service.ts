import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import * as moment from 'moment';


import { Auction } from './auctions/auction';
import { AUCTIONS } from './mock-auction';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {

  resp: any;
  constructor(private http: HttpClient) { }

  getAuctions(page: number): Observable<Auction[]> {
    return this.http.get(`/api/auctions/page?pageAmount=3&pageIndex=${page}`);
  }

  getAuction(id: number): Observable<Auction> {
    return this.http.get(`/api/auctions/${id}`);
  }

  getRecentAuctions(): Observable<Auction> {
    return this.http.get(`/api/auctions/recent?pageAmount=3&pageIndex=0`);
  }

  saveAuction(newAuction: Auction){
     console.log(newAuction);
    // console.log("NEW AUCTION");
    // var date = newAuction.startDate;
    // console.log( moment(date).format('MM/DD/YYYY'));
)
   var formData = {
  	"title": newAuction.title,
	"description": newAuction.description,
  "direction": newAuction.address,
	"initialPrice": newAuction.initialPrice,
	"startDate": `${moment(newAuction.startDate).format('DD-MM-YYYY')}`,
  "endDate": `${moment(newAuction.endDate).format('DD-MM-YYYY')} ${moment(newAuction.endTime).format('HH:mm:ss')}`,
  // ${newAuction.endTime.getHours()}:${newAuction.endTime.getMinutes()}:00
	"pictures": [newAuction.pictures]
	 };
   console.log(formData);
    return this.http.post(`/api/auctions/new?userId=${newAuction.owner}`, formData).subscribe(data => console.log(data));
  }
}
