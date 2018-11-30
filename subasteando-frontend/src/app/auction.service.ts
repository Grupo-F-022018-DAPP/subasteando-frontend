import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
    //pageAmount=10&pageIndex=0
    console.log(page)
    return this.http.get(`/api/auctions/page?pageAmount=3&pageIndex=${page}`);
  }

  getAuction(id: number): Observable<Auction> {
  //  id = id.trim();
  //  const options = id ? { params: new HttpParams().set('id', id) } : {};
    return this.http.get(`/api/auctions/${id}`);
  }
}
