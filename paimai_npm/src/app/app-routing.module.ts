import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { test } from './test';
import {mainview} from'./mainview';
import{ccomponentview} from'./ccomponentview';
import{mylogin} from'./login';
import{userdetail} from'./userdetail';
import{selectuser} from'./selectuser';
import{juanzeng} from'./juanzeng';
import{updateuser} from'./updateuser';
import{moreprojecte} from'./moreprojecte';
import{joinus} from'./joinus';
import{morenews} from'./morenews';
import{newsdetail} from'./newsdetail';

const routes: Routes = [
  {path:'', component:mainview},
  {path:'home',component:mainview},
  {path:'test',component:test},
  {path:'mylogin',component:mylogin},
  {path:'updateuser',component:updateuser},
  {path:'moreprojecte',component:moreprojecte},
  {path:'joinus',component:joinus},
  {path:'morenews',component:morenews},
  {path:'newsdetail',component:newsdetail},
  {path:'userdetail',component:userdetail,
  children: [
           {
             path: 'updateuser',
             component: updateuser
           }
         ]},
  {path:'selectuser',component:selectuser},
  {path:'juanzeng',component:juanzeng},
  {path:'conpent',component:ccomponentview}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
