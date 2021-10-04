import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderType } from '../right-swipe/right-swipe.component';
import {
  animateChild,
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-par-title',
  templateUrl: './par-title.component.html',
  styleUrls: ['./par-title.component.scss'],
  animations: [
    trigger('leftSwipe', [
      transition(':enter', [
        style({ transform: 'translateX(-100vw)' }),
        animate('0.3s ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100vw)' })),
      ]),
    ]),
    trigger('rightSwipe', [
      transition(':enter', [
        style({ transform: 'translateX(100vw)' }),
        animate('0.3s ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100vw)' })),
      ]),
    ]),
  ],
})
export class ParTitleComponent implements OnInit {
  @Input() modes: {
    title: string;
    content: string;
    color?: string;
    textAlign?: string;
  }[] = [];

  centered = false;
  textAlign = 'right';
  @Input() currentSlide = 0;
  SliderType = SliderType;

  @Input() type: SliderType = 1;
  @Input() last = false;
  @Output() nextClicked = new EventEmitter();
  constructor() {
    this.modes.forEach((e) => {
      if (e.color == undefined) e.color = '#B7BDC8';
      if (e.textAlign == undefined) e.textAlign = 'right';
    });
  }

  onNextClicked() {
    this.nextClicked.emit();
  }
  ngOnInit(): void {}
}
