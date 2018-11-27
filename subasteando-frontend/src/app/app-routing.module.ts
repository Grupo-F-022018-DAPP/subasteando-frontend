import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent }      from './auctions/auctions.component';
import { AuctionDetailComponent }  from './auction-detail/auction-detail.component';
import { UsersComponent }      from './users/users.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionsComponent },
  { path: 'auction/:id', component: AuctionDetailComponent },
  { path: 'user', component:  UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
