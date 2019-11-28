import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHandler} from '@angular/common/http';


@Component({
  selector: 'mylogin',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class mylogin {
  username:string = '';
  userpassword:string='';
  errorcode:number = 0;
  constructor(private http:HttpClient,public router: Router){

  }
  nagigate(){
    if(this.username === ''){
      this.errorcode = 1;
      return;
    }
    if(this.userpassword === ''){
      this.errorcode = 2;
      return;
    }
    //this.router.navigate('conpent');
    http://192.168.31.50:8080/user/showUser?id=1
    this.http.get('http://localhost:7902/login?userName='+this.username+'&password='+this.userpassword).subscribe(data=>{
      console.log(data);
      if(data == null || data == undefined){
        this.errorcode = 3;
        return;
      }
      this.errorcode = 0;
        this.router.navigateByUrl('userdetail');
    });
    //localhost:8080/user/showUser?id=1
    //this.router.navigateByUrl('/conpent');
    //this.router.navigate(['test']);
  }
}