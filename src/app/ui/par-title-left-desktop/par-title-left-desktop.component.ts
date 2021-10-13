import {
  animateChild,
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderType } from '../right-swipe/right-swipe.component';

@Component({
  selector: 'app-par-title-left-desktop',
  templateUrl: './par-title-left-desktop.component.html',
  styleUrls: ['./par-title-left-desktop.component.scss'],
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
export class ParTitleLeftDesktopComponent implements OnInit {
  @Input() modes: {
    title: string;
    content: string;
    color?: string;
    textAlign?: string;
  }[] = [];
  SliderType = SliderType;
  @Input() type = SliderType.modes;
  @Input() currentSlide = 0;
  centered = false;
  textAlign = 'right';
  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  constructor() {
    this.modes.forEach((e) => {
      if (e.color == undefined) e.color = '#B7BDC8';
      if (e.textAlign == undefined) e.textAlign = 'right';
    });
  }
  onNextClicked() {
    this.nextClicked.emit();
  }
  onPreviousClicked() {
    this.previousClicked.emit();
  }
  ngOnInit(): void {}
}
