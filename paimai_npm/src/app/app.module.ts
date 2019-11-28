import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { test } from './test';
import { paimeiMessage } from './paimeiMessage';
import { WebSocketService } from './WebSocketService';
import { mainview } from './mainview';
import { header} from './header';
import { footer} from './footer';
import {ccomponentview} from'./ccomponentview';
import {BannerComponent} from'./banner.component';
import {newscover} from'./newscover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteListModule } from 'angular-infinite-list';
import {scrolltext} from'./scrolltext';
import{CommonService} from'./scroll_service';
import {KSSwiperModule} from "angular2-swiper";
import {swipers} from "./swiper";
import {morenews} from "./morenews";
import {newsdetail} from "./newsdetail";
import {mylogin} from "./login";
import {userdetail} from"./userdetail";
import {juanzeng} from"./juanzeng";
import {selectuser} from"./selectuser";
import {joinus} from"./joinus";
import {juanmoney} from"./juanmoney";
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {moreprojecte} from"./moreprojecte";
import {updateuser} from'./updateuser';

@NgModule({
  declarations: [
    AppComponent, 
    test, 
    paimeiMessage, 
    mainview, 
    header,
    footer,
    newscover,
    ccomponentview,
    scrolltext,
    swipers,
    morenews,
    newsdetail,
    mylogin,
    userdetail,
    juanzeng,
    selectuser,
    joinus,
    juanmoney,
    moreprojecte,
    updateuser,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteListModule,
    KSSwiperModule,
    AngularDateTimePickerModule,
    FormsModule
  ],
  providers: [WebSocketService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
