import { Component, Input, OnInit } from '@angular/core';
import {
  animateChild,
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

export enum SliderType {
  modes = 1,
  hormons = 2,
  calendar = 3,
  follicleIcon = 4,
  aboutApp = 5,
  howItWorks = 6,
}

@Component({
  selector: 'app-right-swipe',
  templateUrl: './right-swipe.component.html',
  styleUrls: ['./right-swipe.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(200vw)' }),
        animate('0.6s', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({}),
        animate('0.3s', style({ transform: 'translateX(-200vw)' })),
      ]),
    ]),
  ],
})
export class RightSwipeComponent implements OnInit {
  @Input() modes: {
    title: string;
    content: string;
    img: string;
  }[] = [];

  @Input() type: SliderType = 1;

  currentSlide = 0;

  imgs: string[] = [];

  constructor() {}
  nextMode() {
    if (this.modes.length - 1 >= this.currentSlide + 1) this.currentSlide++;
  }
  ngOnInit(): void {
    this.modes.forEach((e) => {
      this.imgs.push(e.img);
    });
    console.log(this.imgs);
  }
}
