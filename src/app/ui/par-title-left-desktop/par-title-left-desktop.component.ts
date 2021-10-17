import { trigger, style, animate, transition } from '@angular/animations';
import {
  HostListener,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  innerWidth = 0;
  SliderType = SliderType;
  @Input() type = SliderType.modes;
  @Input() currentSlide = 0;
  centered = false;
  textAlign = 'right';
  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  @ViewChild('hormonesIcon') hormonesIcon: ElementRef;
  @ViewChild('follicleIcon') follicleIcon: ElementRef;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    var halfWidth = this.innerWidth / 2;
    var xOffset1 = ((e.clientX - halfWidth) / this.innerWidth) * 1000;
    var xOffset = ((e.clientX - halfWidth) / this.innerWidth) * 60;
    if (this.type == SliderType.hormons) {
      this.hormonesIcon.nativeElement.style.transform =
        'rotate(' + xOffset * -1 + 'deg)';
    }
    if (this.type == SliderType.follicleIcon) {
      this.follicleIcon.nativeElement.style.transform =
        'rotateY(' + xOffset1 * -1 + 'deg)';
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.innerWidth = window.innerWidth;
  }
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
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
