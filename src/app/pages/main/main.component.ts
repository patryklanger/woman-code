import { Component, HostListener, OnInit } from '@angular/core';
import { WindowRefService } from 'src/app/window-ref.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('outStayAnimation', [
      transition(':leave', [style({}), animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event) {
    this.opacity =
      1 -
      (this.winRef.nativeWindow.innerHeight * 0.8 -
        this.winRef.nativeWindow.scrollY) /
        (this.winRef.nativeWindow.innerHeight * 0.8);

    this.opacity < 0 ? (this.opacity = 0) : true;
    this.opacity > 1 ? (this.opacity = 1) : true;
    console.log(this.opacity);
  }
  opacity = 0;
  constructor(private winRef: WindowRefService) {}
  onClicked() {
    alert('XD');
  }

  ngOnInit(): void {}
}
