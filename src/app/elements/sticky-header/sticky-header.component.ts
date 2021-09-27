import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss'],
})
export class StickyHeaderComponent implements OnInit {
  constructor(private router: Router) {}
  onLogoClicked() {
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {}
}
