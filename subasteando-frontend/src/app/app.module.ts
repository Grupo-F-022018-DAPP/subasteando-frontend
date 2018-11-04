import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { BidsComponent } from './bids/bids.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionsComponent,
    AuctionDetailComponent,
    BidsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
