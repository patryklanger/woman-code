import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
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
  innerWidth = 0;
  @Input() type = SliderType.modes;
  @Input() modes: Mode[] = [];
  @Input() currentSlide = 0;
  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  @ViewChild('icon') icon: ElementRef;
  @ViewChild('calendarIcon') calendarIcon: ElementRef;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if (this.type == SliderType.modes) {
      var xOffset = (e.clientX / this.innerWidth) * 180;
      this.icon.nativeElement.style.transform = 'rotate(' + xOffset + 'deg)';
    } else if (this.type == SliderType.calendar) {
      var halfWidth = this.innerWidth / 2;
      var xOffset = (e.clientX - halfWidth) / this.innerWidth;
      var angle = xOffset * 60;
      var translate = xOffset * 200;
      this.calendarIcon.nativeElement.style.transform =
        'rotate(' + angle * -1 + 'deg) translateX(' + translate + '%)';
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
