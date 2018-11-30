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

//   httpOptions: {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

  getAuctions(): Observable<Auction[]> {
    return this.http.get("/api/auctions");
  }

  getAuction(id: number): Observable<Auction> {
  //  id = id.trim();
  //  const options = id ? { params: new HttpParams().set('id', id) } : {};
    return this.http.get(`/api/auctions/${id}`);
  }
}
