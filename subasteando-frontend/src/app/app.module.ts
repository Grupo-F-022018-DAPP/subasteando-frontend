import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { BidsComponent } from './bids/bids.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddAuctionComponent } from './add-auction/add-auction.component'

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AuctionsComponent,
    AuctionDetailComponent,
    BidsComponent,
    UsersComponent,
    HomeComponent,
    AddAuctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
