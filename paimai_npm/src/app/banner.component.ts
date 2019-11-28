import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('carousel', [
      state('stay', style({
        marginLeft: '-80vw'
      })),
      state('stayR', style({
        marginLeft: '-80vw'
      })),
      state('moveLeft', style({
        marginLeft: '-80vw'
      })),
      state('moveRight', style({
        marginLeft: '-80vw'
      })),
      transition('* => moveLeft', animate('500ms ease-in-out', style({
        marginLeft: '-160vw'
      }))),
      transition('* => stay', animate('500ms ease-in-out', style({
        marginLeft: '-160vw'
      }))),
      transition('* => moveRight', animate('500ms ease-in-out', style({
        marginLeft: '0vw'
      })))
    ])
  ]
})

export class BannerComponent implements OnInit {
  bannerPic: any[] = [
    {img: '../assets/picture/paifenghaiyan2.jpg'},
    {img: '../assets/picture/zanwu.jpg'},
    {img: '../assets/picture/main.jpg'},
    {img: '../assets/picture/zanwu.jpg'},
    {img: '../assets/picture/main.jpg'}
  ];
  state = 'stay';
  timer: any;

  constructor() { }

  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
  }

  ngOnInit() {
    this.autoPlay();
  }

  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.bannerPic.push(this.bannerPic[0]);
      this.bannerPic.shift();
    } else if (this.state === 'moveRight') {
      const last = this.bannerPic.length - 1;
      this.bannerPic.unshift(this.bannerPic[last]);
      this.bannerPic.pop();
      this.state = 'stayR';
    }
  }

  stopPlay(): void {
    clearInterval(this.timer);
  }

  playPre(): void {
    this.state = 'moveRight';
  }

  playNext(): void {
    this.state = this.state === 'stay' ? 'moveLeft' : 'stay';
  }
}