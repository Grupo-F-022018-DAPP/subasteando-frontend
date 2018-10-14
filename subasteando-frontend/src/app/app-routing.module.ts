import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent }      from './auctions/auctions.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
