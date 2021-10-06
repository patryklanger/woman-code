import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.scss'],
})
export class AboutAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    window.scrollTo({ top: 0, left: 0 });
  }
}
