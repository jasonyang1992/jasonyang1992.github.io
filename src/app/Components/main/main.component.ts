import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class MainComponent implements OnInit {

  images = [944, 1011, 984].map((n) =>  "https://github.com/jasonyang1992/jasonyang1992.github.io/blob/master/Images/index/Slide2.png?raw=true");

  constructor() { }

  ngOnInit() {
  }

}
