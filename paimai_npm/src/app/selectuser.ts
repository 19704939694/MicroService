import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHandler} from '@angular/common/http';
import {DatePipe} from "@angular/common"; 


@Component({
  providers: [DatePipe],
  selector: 'selectuser',
  templateUrl: './selectuser.html',
  styleUrls: ['./selectuser.css']
})
export class selectuser implements OnInit {
  date: Date = new Date();
  testdate: Date = new Date();
  offsetMax:number = 1;

  projecttype:string = '';
  donor:string='';
  identity:string='';
  address:string='';
  donaterdata:Array<any> = new Array<any>();
  projectdata:Array<any> = new Array<any>();
  constructor(private http:HttpClient,private datePipe:DatePipe){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:7902/allproject').subscribe(data=>{
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
    let postdata ={
      'offSet':0
    }
    this.http.post('http://localhost:7902/alldonater',postdata).subscribe(data=>{
      console.log(data);
      var i = 0;
      while(true){
        if(data[i] === null||data[i] === undefined){
          break;
        }
        if(i<10){
          this.donaterdata.push(data[i]);
        }
        i++;
      }
      if(i>10){
        this.offsetMax = i/10;
      }
    },error=>{
      console.log(error);
      console.log(error.json());
    });
  }

  postData(){
    console.log('start');
    let postdate = this.datePipe.transform(this.date,"yyyyMMdd");
    let postdata  ={
      'projecttype':this.projecttype,
      'donordate':postdate,
      'donor':this.donor,
      'identity':this.identity,
      'offSet':0
    };
    console.log(postdata);
    this.http.post('http://localhost:7902/alldonater',postdata).subscribe(data=>{
      var i = 0;
      while(true){
        if(this.donaterdata.length == 0){
          break;
        }
        this.donaterdata.pop();
      }
      while(true){
        if(data[i] === null||data[i] === undefined){
          break;
        }
        if(i<10){
          this.donaterdata.push(data[i]);
        }
        i++;
      }
      if(i>10){
        this.offsetMax = i/10;
      }
      console.log(data);
    },error=>{
      console.log(error);
      console.log(error.json());
    });
  }
  


  settings = {
		bigBanner: true,
		timePicker: true,
		format: 'dd-MM-yyyy',
		defaultOpen: false
  }
//   constructor(private http:HttpClient){

//   }
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