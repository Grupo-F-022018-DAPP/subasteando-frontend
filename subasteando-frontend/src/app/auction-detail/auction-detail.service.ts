import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Auction } from '../auctions/auction';

@Injectable({
  providedIn: 'root',
})
export class AuctionDetailService {

  resp: any;
  constructor(private http: HttpClient) { }

  getAuction(id: number): Observable<Auction> {
    return this.http.get(`/api/auctions/${id}`);
  }
}
