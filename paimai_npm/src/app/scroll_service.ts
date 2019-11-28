
import { Injectable } from '@angular/core';



@Injectable()
export class CommonService {
  data: { user:string,money: string, msg: string }[] = [];
i
  generateData(length: number = 100000): {  user:string,money: string, msg: string }[] {
    for (let i: number = 0; i < length; i++) {
      this.data.push({  user:'张三'+i,money: '大米两袋', msg: '勇敢面对！' });
    }
    return this.data;
  }

  insertData(user2:string,money:string,msg:string){
    this.data[10].user = user2;
    this.data[10].money = money;
    this.data[10].msg = msg;
  }


  clone(target: any[]): any[] {
    let data = [];
    for (let i = 0; i < target.length; i++)
      data.push(target[i]);
    return data;
  }

}