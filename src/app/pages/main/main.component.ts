import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { WindowRefService } from 'src/app/window-ref.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { PresentationPageComponent } from '../presentation-page/presentation-page.component';
import { Mode } from 'src/app/utility/mode';
import { ContentService } from '../../content.service';
import { SliderType } from 'src/app/ui/right-swipe/right-swipe.component';

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
  modes: Mode[] = [];
  hormons: Mode[] = [];
  calendar: Mode[] = [];
  follicleIcon: Mode[] = [];
  SliderType = SliderType;
  activeParam = -1;
  section = '';

  @ViewChild('modesSection') modesSection: ElementRef;
  @ViewChild('hormonesSection') hormonesSection: ElementRef;
  @ViewChild('calendarSection') calendarSection: ElementRef;
  @ViewChild('follicleIconSec') follicleSection: ElementRef;
  @ViewChild('howItWorksSec') howItWorksSec: ElementRef;
  @ViewChild('aboutAppSection') aboutAppSection: ElementRef;

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
  constructor(
    private winRef: WindowRefService,
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {
    if (!this.route.params) this.activeParam = 1;
    this.route.params.subscribe((params) => {
      this.section = params.term;
    });

    this.modes = contentService.getModes();
    this.hormons = contentService.getHormones();
    this.calendar = contentService.getCalendar();
    this.follicleIcon = contentService.getFollicleIcon();
  }
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
  activatedPage(section: string) {
    let options = {
      behavior: 'smooth',
      block: 'start',
    };
    switch (section) {
      case 'modes':
        this.modesSection.nativeElement.scrollIntoView(options);
        this.activeParam = 1;
        break;
      case 'hormones':
        this.hormonesSection.nativeElement.scrollIntoView(options);
        this.activeParam = 2;
        break;
      case 'calendar':
        this.calendarSection.nativeElement.scrollIntoView(options);
        this.activeParam = 3;
        break;
      case 'follicle':
        this.follicleSection.nativeElement.scrollIntoView(options);
        this.activeParam = 4;
        break;
      case 'aboutApp':
        this.aboutAppSection.nativeElement.scrollIntoView(options);
        this.activeParam = 5;
        break;
      case 'how-it-works':
        this.howItWorksSec.nativeElement.scrollIntoView(options);
        this.activeParam = 6;
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    window.scrollTo({ top: 0, left: 0 });
    let options = {
      behavior: 'smooth',
      block: 'start',
    };
    setTimeout(() => {
      switch (this.section) {
        case 'modes':
          this.modesSection.nativeElement.scrollIntoView(options);
          this.activeParam = 1;
          break;
        case 'hormones':
          this.hormonesSection.nativeElement.scrollIntoView(options);
          this.activeParam = 2;
          break;
        case 'calendar':
          this.calendarSection.nativeElement.scrollIntoView(options);
          this.activeParam = 3;
          break;
        case 'follicle':
          this.follicleSection.nativeElement.scrollIntoView(options);
          this.activeParam = 4;
          break;
        case 'aboutApp':
          this.aboutAppSection.nativeElement.scrollIntoView(options);
          this.activeParam = 5;
          break;
        case 'how-it-works':
          this.howItWorksSec.nativeElement.scrollIntoView(options);
          this.activeParam = 6;
          break;
        default:
          break;
      }
    }, 500);
  }
}
