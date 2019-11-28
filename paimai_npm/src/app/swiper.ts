import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'swipers',
  templateUrl: './swiper.html',
  styleUrls: ['./swiper.css']
})
export class swipers {
    //@ViewChild(KSSwiperContainer)
    swiperContainer:KSSwiperContainer;
  
    // 图片数组
    data:Array<string>;
    // 配置
    swipeOptions:any;
  
    constructor() {
      this.swipeOptions = {
        // 每页显示几张图片
        slidesPerView: 1,
        // 是否循环
        loop: true,
        autoplay:5000,
        spaceBetween: 5,
        nextButton:'.right-active',
        pagination:'.swiper-pagination',
        prevButton:'.left-active'
      };
      this.data = [
        'new1', 'new2', 'new3',
      ]
    }
    // 下一个
    // moveNext() {
    //   this.swiperContainer.swiper.slideNext();
    // }
    // // 上一个
    // movePrev() {
    //   this.swiperContainer.swiper.slidePrev();
    // }
}