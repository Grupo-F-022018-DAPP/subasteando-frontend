import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Auction } from '../auctions/auction';
import { Bid } from 'src/app/bids/bid';

@Injectable({
  providedIn: 'root',
})
export class AuctionDetailService {

  resp: any;
  constructor(private http: HttpClient) { }

  getAuction(id: number): Observable<any> {
    return this.http.get(`/api/auctions/${id}`);
  }

  getBids(auctionId: number): Observable<any> {
    return this.http.get(`/api/bids/auction?auctionId=${auctionId}`);
  }

  postManualBids(id: number, userId: number): Observable<any> {
    return this.http.post(`/api/bids/newManual?auctionId=${id}&userId=${userId}`,null)
  }

}
