import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HttpHandler} from '@angular/common/http';
import {DatePipe} from "@angular/common"; 
import { CommonService } from './scroll_service';

@Component({
  providers: [DatePipe],
  selector: 'juanzeng',
  templateUrl: './juanzeng.html',
  styleUrls: ['./juanzeng.css']
})
export class juanzeng implements OnInit{
  private resource_type:number = 1;
  projecttype:string = '';
  userlevel:number = 1;
  intact :number = 1;
  qualitydate : number = 1;
  qualitydetail:string = '';
  email : string='';
  donor:string='';
  identity:string='';
  address:string='';
  contact:string='';
  message:string='';

  moneytype:number =1;
  money:string ='';

  flag1: boolean=true;
  flag2: boolean=false;
  date: Date = new Date();
  describe:string = '';
  //projectdata :any[];
  projectdata:Array<any> = new Array<any>();
  constructor(private http:HttpClient,private datePipe:DatePipe,private commonService: CommonService){
  }

  ngOnInit() {
    this.http.get('http://localhost:7902/allproject').subscribe(data=>{
      // let i = 0;
      // while(true){
      //   if(data[i]!=null){
      //     this.projectdata.push(data[i])
      //   }else{
      //     break;
      //   }
      //   i++;
      // }
      // this.projectdata.push(data[0]);
      // this.projectdata.push(data[1]);
      // this.projectdata.push(data[2]);
      // console.log(this.projectdata);
      var i = 0;
      while(true){
        if(data[i] === null||data[i] === undefined){
          break;
        }
        this.projectdata.push(data[i]);
        i++;
      }
    },error=>{
      console.log(error);
      console.log(error.json());
    });
    console.log(this.projectdata);
  }
  setFalg1True(){
    this.flag1 = true;
    this.flag2 = false;
  }

  setFalg2True(){
    this.flag2 = true;
    this.flag1 = false;
  }

	settings = {
		bigBanner: true,
		timePicker: true,
		format: 'dd-MM-yyyy',
		defaultOpen: false
  }
  
  postData(){
    console.log('start');
    let postdate = this.datePipe.transform(this.date,"yyyyMMdd");
    let postdata;
    if(this.flag1){
      let money2 = this.money
      if(this.moneytype===1){
        let money2 = '50';
      }else if(this.moneytype===2){
        let money2 = '100';
      }
      postdata ={
        'projecttype':this.projecttype,
        'email':this.email,
        'donor':this.donor,
        'identity':this.identity,
        'message':this.message,
        'donordate':(new Date()).toLocaleDateString().replace('/','').replace('/',''),
        'money':money2
      }
    }else{
      if(this.resource_type===1){
        postdata={
          'projecttype':this.projecttype,
          'describ':this.describe,
          'producedate':postdate, 
          'qualitydate':this.qualitydate,
          'qualitydetail':this.qualitydetail,
          'email':this.email,
          'donor':this.donor,
          'identity':this.identity,
          'address':this.address,
          'contact':this.contact,
          'donordate':(new Date()).toLocaleDateString().replace('/','').replace('/',''),
          'message':this.message
        }
      }else{
        postdata={
          'projecttype':this.projecttype,
  'describ':this.describe,
  'uselevel':this.userlevel,
  'intact':this.intact,
  'email':this.email,
  'donor':this.donor,
  'identity':this.identity,
  'address':this.address,
  'contact':this.contact,
  'donordate':(new Date()).toLocaleDateString().replace('/','').replace('/',''),
  'message':this.message
        }
      }
      // let postdata={
      //   'type':this.resource_type,
      //   'describe':this.describe,
      //   'uselevel':this.userlevel,
      //   'intact':this.intact,
      //   'producedate':postdate, 
      //   'qualitydate':this.qualitydate,
      //   'qualitydetail':this.qualitydetail,
      //   'email':this.email,
      //   'donor':this.donor,
      //   'identity':this.identity,
      //   'address':this.address,
      //   'contact':this.contact,
      //   'message':this.message
      // }
      //console.log(postdata);
    }
    console.log(postdata);
    this.http.post('http://localhost:7902/insert',postdata).subscribe(data=>{

      // let i = 0;
      // while(true){
      //   if(data[i]!=null){
      //     this.projectdata.push(data[i])
      //   }else{
      //     break;
      //   }
      //   i++;
      // }
      // this.projectdata.push(data[0]);
      // this.projectdata.push(data[1]);
      // this.projectdata.push(data[2]);
      // console.log(this.projectdata);
      console.log(data);
      this.commonService.insertData(this.donor,this.describe,this.message);
      alert('保存成功！');
      // var i = 0;
      // while(true){
      //   if(data[i] === null||data[i] === undefined){
      //     break;
      //   }
      //   this.projectdata.push(data[i]);
      //   i++;
      // }
    },error=>{
      console.log(error);
      console.log(error.json());
    });
  }
  
 
}