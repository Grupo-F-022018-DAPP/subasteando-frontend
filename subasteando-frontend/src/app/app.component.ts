import { Component, OnInit } from '@angular/core';
import { AuctionService } from './auction.service';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Subasteando!';
  private alive: boolean;
  subscription: Subscription;
  statusText: string;

  constructor(public auth: AuthService){
     auth.handleAuthentication();
  }


  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewSession();
    }

  }
}
