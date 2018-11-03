import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Auction } from './auctions/auction';
import { AUCTIONS } from './mock-auction';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {

  getAuctions(): Observable<Auction[]> {
    return of(AUCTIONS);
  }

  getAuction(id: number): Observable<Auction> {
  // TODO: send the message _after_ fetching the hero
    return of(AUCTIONS.find(auction => auction.id === id));
  }
}
