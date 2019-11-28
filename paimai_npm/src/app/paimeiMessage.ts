import { Component } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket'
import {User} from './User'
import {WebSocketService} from'./WebSocketService';


@Component({
  selector: 'paimeiMessage',
  templateUrl: './paimeiMessage.html',
  styleUrls: ['./paimeiMessage.css']
})
export class paimeiMessage {
  public price:number;
  title = 'app-test';
  websocket: WebSocket = null;
  public user :User = new User();
  
  
  constructor(private bService:WebSocketService) {
    const self=this;   
    this.bService.createObservableSocket("ws://192.168.31.50:8080"  + "/jiuzai/websocket").subscribe(
      data=>{ console.log("回调开始"+data);
      self.user=JSON.parse(data);
      self.price= self.user.id;
      console.log(self.user.id);
      console.log(self.user.name);
      console.log(self.price);},
      err=>console.log(err),
      ()=>console.log('end')
    );
    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。  
    window.onbeforeunload = function () {
      bService.closeWebSocket();
    }
}



  sendMsg() {
    this.user.id=this.price;
    this.user.name='guo';
    console.log('发送开始'+JSON.stringify(this.user));
    this.bService.sendMessage(this.user);
  }

}