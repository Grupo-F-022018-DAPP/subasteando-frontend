import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent }      from './auctions/auctions.component';
import { AuctionDetailComponent }  from './auction-detail/auction-detail.component';
import { UsersComponent }      from './users/users.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auctions/:page', component: AuctionsComponent },
  { path: 'auction/:id', component: AuctionDetailComponent },
  { path: 'user', component:  UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
