import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHandler} from '@angular/common/http';


@Component({
  selector: 'newscover',
  templateUrl: './newscover.html',
  styleUrls: ['./newscover.css']
})
export class newscover {
  constructor(private http:HttpClient){

  }
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