import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'juanmoney',
  templateUrl: './juanmoney.html',
  styleUrls: ['./juanmoney.css']
})

export class juanmoney {
  date: Date = new Date();
	settings = {
		bigBanner: true,
		timePicker: true,
		format: 'dd-MM-yyyy',
		defaultOpen: true
	}
}