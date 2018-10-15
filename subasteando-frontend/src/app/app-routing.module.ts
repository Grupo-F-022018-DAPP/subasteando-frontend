import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent }      from './auctions/auctions.component';
import { AuctionDetailComponent }  from './auction-detail/auction-detail.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionsComponent },
  { path: 'auction/:id', component: AuctionDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
