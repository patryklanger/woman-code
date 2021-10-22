import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
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
  @ViewChild('header') headerElement: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    if (this.oldScroll != undefined) {
      var scrollingDown = this.oldScroll < window.scrollY;
      var scrollOffeset = Math.abs(this.oldScroll - window.scrollY);

      if (scrollingDown) this.hideHeader(scrollOffeset);
      else this.showHeader(scrollOffeset);
    }
    this.oldScroll = window.scrollY;
  }
  oldScroll: number = 0;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.showHeader(40);
  }
  toMainPage() {
    this.router.navigateByUrl('main');
  }
  hideHeader(offset: number) {
    if (offset < 30) return;
    var currentOffset = Math.abs(
      Number(
        this.headerElement.nativeElement.style.transform
          .replace('translateY(', '')
          .replace('%)', '')
      )
    );
    if (currentOffset >= 100) return;
    var newOffset = currentOffset + 0.2 * offset;
    if (newOffset > 100 || newOffset > 50) newOffset = 100;
    this.headerElement.nativeElement.style.transform =
      'translateY(-' + newOffset + '%)';
  }
  showHeader(offset: number) {
    if (offset < 30) return;
    this.headerElement.nativeElement.style.transform = 'translateY(0%)';
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
