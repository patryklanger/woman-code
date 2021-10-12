import { Component, Input, OnInit } from '@angular/core';
import { SliderType } from 'src/app/ui/right-swipe/right-swipe.component';
import { Mode } from '../../utility/mode';
import {
  animateChild,
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
@Component({
  selector: 'app-par-title-desktop',
  templateUrl: './par-title-desktop.component.html',
  styleUrls: ['./par-title-desktop.component.scss'],
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
export class ParTitleDesktopComponent implements OnInit {
  SliderType = SliderType;
  @Input() type = SliderType.modes;
  currentSlide = 1;
  @Input() modes: Mode[] = [];
  constructor() {}

  ngOnInit(): void {}
}
