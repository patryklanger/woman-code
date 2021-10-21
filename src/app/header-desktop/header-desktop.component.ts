import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatVideoTrackDirective } from 'mat-video/lib/directives/mat-video-track.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss'],
})
export class HeaderDesktopComponent implements OnInit {
  constructor(private router: Router) {
    if (this.router.url == '/about-app') this.activePage = 5;
  }
  @Input() activePage = 0;
  @Output() activatedPage = new EventEmitter<string>();
  ngOnInit(): void {}
  toMainPage() {
    this.router.navigateByUrl('main');
  }
  linkClicked(pageNo: number) {
    switch (pageNo) {
      case 1:
        this.activePage = 1;
        this.router.navigateByUrl('main/modes');
        this.activatedPage.emit('modes');
        break;
      case 2:
        this.activePage = 2;
        this.router.navigateByUrl('main/hormones');
        this.activatedPage.emit('hormones');
        break;
      case 3:
        this.activePage = 3;
        this.router.navigateByUrl('main/calendar');
        this.activatedPage.emit('calendar');
        break;
      case 4:
        this.activePage = 4;
        this.router.navigateByUrl('main/follicle');
        this.activatedPage.emit('follicle');
        break;
      case 5:
        this.router.navigateByUrl('main/aboutApp');
        this.activatedPage.emit('aboutApp');
        this.activePage = 5;
        break;
      case 6:
        this.activePage = 6;
        this.router.navigateByUrl('main/how-it-works');
        this.activatedPage.emit('how-it-works');
        break;
      case 7:
        this.activePage = 7;
        break;
      case 8:
        this.activePage = 8;
        break;
      default:
        break;
    }
  }
}
