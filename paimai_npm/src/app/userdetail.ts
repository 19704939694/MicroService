import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHandler} from '@angular/common/http';

@Component({
  selector: 'userdetail',
  templateUrl: './userdetail.html',
  styleUrls: ['./userdetail.css']
})
export class userdetail {
  constructor(private http:HttpClient,public router: Router,public myrouter: ActivatedRoute){

  }
  checked:number = 0;
  changeValue(p:number){
    this.checked = p;
    console.log(this.checked);
  }
}