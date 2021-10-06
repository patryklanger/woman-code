import { Component, HostListener, OnInit } from '@angular/core';
import { WindowRefService } from 'src/app/window-ref.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';

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
  }
  opacity = 0;
  constructor(private winRef: WindowRefService, private router: Router) {}
  onClicked() {
    alert('XD');
  }
  scrollToStart(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  onImageClicked() {
    this.router.navigateByUrl('our-app/0');
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
