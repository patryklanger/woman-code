import {
  animateChild,
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-gallery',
  templateUrl: './screen-gallery.component.html',
  styleUrls: ['./screen-gallery.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.6s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('0.6s ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class ScreenGalleryComponent implements OnInit {
  @Input() imgs: string[] = [];
  @Input() currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.imgs);
  }
}
