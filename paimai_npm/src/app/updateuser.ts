import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpHandler} from '@angular/common/http';
import {DatePipe} from "@angular/common"; 


@Component({
  providers: [DatePipe],
  selector: 'updateuser',
  templateUrl: './updateuser.html',
  styleUrls: ['./updateuser.css']
})
export class updateuser implements OnInit {
   
   date: Date = new Date();
   offsetMax:number = 1;

   projecttype:string = '';
   userlevel:string='';
   intact:string='';
   qualitydate:string='';
   donatype:string='';
   donaterdata:Array<any> = new Array<any>();
   projectdata:Array<any> = new Array<any>();
   constructor(private http:HttpClient,private datePipe:DatePipe){
   }

  ngOnInit(): void {
      let postdata ={
        'offSet':0
      } ;
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
 
    this.http.post('http://localhost:7902/sdforupdate',postdata).subscribe(data=>{
      console.log(data);
      var i = 0;
      while(true){
        if(data[i] === null||data[i] === undefined){
          break;
        }
        if(i<10){
          data[i].ischanged = false;
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
    let postdata  ={
      'projecttype':this.projecttype,
      'userlevel':this.userlevel,
      'intact':this.intact,
      'qualitydate':this.qualitydate,
      'donatype':this.donatype,
      'offSet':0
    };
    console.log(postdata);
    this.http.post('http://localhost:7902/sdforupdate',postdata).subscribe(data=>{
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
          data[i].ischanged = false;
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

   updatePost(){
     let updatedata = [];
     if(this.donaterdata.length>0){
      this.donaterdata.forEach(e => {
        if(e.ischanged){
          updatedata.push({
            'msindex':e.msindex,
             'donatype':e.donatype
          })
        }
       });
       if(updatedata.length>0){
        this.http.post('http://localhost:7902/update',updatedata).subscribe(data=>{
          console.log(data);
          alert('保存成功！');
        },error=>{
          console.log(error);
          console.log(error.json());
        });
       }else{
         alert('保存变动前请改动至少一条数据');
       }
     }
   }
}