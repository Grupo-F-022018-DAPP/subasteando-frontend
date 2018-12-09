import { Component } from '@angular/core';
import { AuctionService } from './auction.service';
import { Subscription, timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';


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

  constructor(private auctionService: AuctionService){

  }


  ngOnInit() {
    this.subscription = timer(0, 300000).pipe(
        switchMap(() => this.auctionService.checkdata())
      ).subscribe(result => this.statustext = result);

  }
}
