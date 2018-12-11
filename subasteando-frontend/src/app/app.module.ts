import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { BidsComponent } from './bids/bids.component';
import { UsersComponent } from './users/users.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddAuctionComponent } from './add-auction/add-auction.component'

import { AuthService } from './auth/auth.service';

import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

import { AuthInterceptor } from './auth/auth.interceptor';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en')
registerLocaleData(localeEs, 'es');

import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

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
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DlDateTimePickerDateModule,
    TimepickerModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Ar' },
    AuthService,
    { provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
