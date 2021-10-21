import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-app-desktop',
  templateUrl: './about-app-desktop.component.html',
  styleUrls: ['./about-app-desktop.component.scss'],
})
export class AboutAppDesktopComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  showMeMoreClicked() {
    this.router.navigateByUrl('about-app');
  }
}
