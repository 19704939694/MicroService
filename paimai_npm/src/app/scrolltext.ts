

import { Component, NgModule, ChangeDetectorRef, ElementRef } from '@angular/core';

import { CommonService } from './scroll_service';

import { Subject } from 'rxjs/Subject';

import { Subscription } from 'rxjs/Subscription';

import {OnInit,ChangeDetectionStrategy,OnDestroy} from  "@angular/core";



@Component({
  selector: 'scrolltext',
  templateUrl: './scrolltext.html',
  styleUrls: ['./scrolltext.css']
})
export class scrolltext {
  private timer;
  data: {  user:string,money: string, msg: string }[];
  debug: boolean = true;
  scrollToIndex: number = 0;
  scrollOffset: number = 0;

  event: any;

  sub: Subscription;



  constructor(private cdRef: ChangeDetectorRef, private commonService: CommonService,private el: ElementRef) { 
    this.timer = setInterval(() => {//设置定时刷新事件，每隔5秒刷新

      this.getEchart();

    }, 0.0001)
  }



  ngOnInit() {
    if(this.commonService.data.length>0){
      this.data = this.commonService.data;
    }else{
      this.data = this.commonService.generateData(35);
    }
  }

  getEchart(){
    this.scrollOffset=this.scrollOffset+0.1;
    if(this.scrollOffset>1000){
      this.scrollOffset = 0;
    }
  }


  ngOnDestroy() {

    this.sub && this.sub.unsubscribe();
    if (this.timer) {

      clearInterval(this.timer);

    }

  }



  update($event: Subject<any>) {

    this.sub = $event.subscribe(x => {

      this.cdRef.detectChanges();

      this.event = x;

    });

  }
//   event: ILEvent;
//   item0 : { "title": 0, "msg": "hello wrold1" };
//   item1 : { "title": 1, "msg": "hello wrold2" } 
//   item2 : { "title": 2, "msg": "hello wrold3" } 
//   data:any[]=[this.item0 ,this.item1 ,this.item2];
//   constructor(private cdRef: ChangeDetectorRef){
//   }
//   update($event: Subject<any>) {
//     $event.subscribe(x => {
// 		this.event = x;
//       	this.cdRef.detectChanges();
// 	});
// }
//   nagigate(){
//     console.log('start');

//     //http://192.168.31.50:8080/user/showUser?id=1
//     this.http.get('http://192.168.31.50:7902/hello?userid=1').subscribe(data=>{
//       console.log(data);
//     });
//     //localhost:8080/user/showUser?id=1
//     //this.router.navigateByUrl('/conpent');
//     //this.router.navigate(['test']);
//   }
}