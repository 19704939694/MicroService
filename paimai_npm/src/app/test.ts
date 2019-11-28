import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrls: ['./test.css']
})
export class test {
  title = 'app-test';
  firstname:string='GOOD JOB'
  constructor(private http:HttpClient){
  }
  

  ChangeName(){
    let postdata1  ={
      'projecttype':'6',
      'userlevel':'888',
    };
    let postdata2  ={
      'projecttype':'8',
      'userlevel':'6',
    };
    let postdata3  ={
      'projecttype':'2',
      'userlevel':'3',
    };
    let postdata={postdata1,postdata2,postdata3};
    let postdat=[postdata1,postdata2,postdata3];
    console.log(postdata);
    console.log(postdat);
    this.http.post('http://localhost:7902/update',postdat).subscribe(data=>{
      var i = 0;

      console.log(data);
    },error=>{
      console.log(error);
      console.log(error.json());
    })
  }
}