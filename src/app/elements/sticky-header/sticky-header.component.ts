import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss'],
})
export class StickyHeaderComponent implements OnInit {
  constructor(private router: Router) {}
  @Output() routeChanged = new EventEmitter<number>();
  onLogoClicked() {
    this.router.navigateByUrl('');
  }
  linkClicked(id: any) {
    this.routeChanged.emit(Number(id));
  }
  ngOnInit(): void {}
}
