import { Component } from '@angular/core';
import { AuctionService } from './auction.service';
import { AuthService } from './auth/auth.service';


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
    // this.subscription = timer(0, 300000).pipe(
    //     switchMap(() => this.auctionService.checkdata())
    //   ).subscribe(result => this.statustext = result);
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewSession();
    }

  }
}
