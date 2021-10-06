import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100vw)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('0.3s ease-in', style({ transform: 'translateX(-100vw)' })),
      ]),
    ]),
    trigger('holdUntilAnimate', [
      transition(':enter', [
        style({ display: 'none' }),
        animate('0.3s', style({ display: 'block' })),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  @Output() routeChanged = new EventEmitter<number>();
  opened = false;
  constructor(private router: Router) {}
  toggleMenuClick() {
    this.opened = !this.opened;
  }
  linkClicked(id: number) {
    this.toggleMenuClick();
    this.routeChanged.emit(id);
    this.router.navigateByUrl('our-app/' + id);
  }
  ngOnInit(): void {}
}
