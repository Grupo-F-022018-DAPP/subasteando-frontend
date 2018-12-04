import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

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
    console.log("NEW AUCTION");
   var formData = {
  	"title": newAuction.title,
	"description": newAuction.description,
  "direction": newAuction.address,
	"initialPrice": newAuction.initialPrice,
	"startDate": newAuction.startDate,
  "endDate": newAuction.endDate,
	"pictures": [newAuction.pictures]
	 };
    return this.http.post(`/api/auctions/new?userId=${newAuction.owner}`, formData).subscribe(data => console.log(data));
  }
}
