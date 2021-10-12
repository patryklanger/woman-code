import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SliderType } from 'src/app/ui/right-swipe/right-swipe.component';
import { Mode } from 'src/app/utility/mode';
import { ContentService } from '../../content.service';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss'],
})
export class PresentationPageComponent implements OnInit {
  SliderType = SliderType;
  modes: Mode[] = [];
  hormons: Mode[] = [];
  calendar: Mode[] = [];
  follicleIcon: Mode[] = [];
  aboutApp: Mode[] = [];
  doctors = [
    {
      img: 'assets/presentation/doctors/doctor1.png',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      name: 'Dr John Snow',
      link: '',
    },
  ];
  partners = [
    {
      img: 'assets/business-partners/1.png',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
    },
    {
      img: 'assets/business-partners/1.png',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
    },
    {
      img: 'assets/business-partners/1.png',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
    },
    {
      img: 'assets/business-partners/1.png',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
    },
  ];

  @ViewChild('mainSection') MainSection: ElementRef;
  @ViewChild('modesSec') ModesSec: ElementRef;
  @ViewChild('hormonsSec') HormonsSec: ElementRef;
  @ViewChild('calendarSec') CalendarSec: ElementRef;
  @ViewChild('follicleSec') FollicleSec: ElementRef;
  @ViewChild('aboutAppSec') AboutAppSec: ElementRef;
  @ViewChild('howItWorksSec') HowItWorksSec: ElementRef;
  sections: ElementRef[] = [];
  id = -1;
  scrollInto(id: any) {
    // if (this.id == -1) return;
    if (id == 0) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }
    setTimeout(() => {
      this.sections[id].nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 500);
  }
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {
    this.modes = contentService.getModes();
    this.hormons = contentService.getHormones();
    this.calendar = contentService.getCalendar();
    this.follicleIcon = contentService.getFollicleIcon();
    this.aboutApp = contentService.getAboutApp();
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.sections = [
      this.MainSection,
      this.ModesSec,
      this.HormonsSec,
      this.CalendarSec,
      this.FollicleSec,
      this.AboutAppSec,
      this.HowItWorksSec,
    ];
    this.scrollInto(0);
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id != -1) this.scrollInto(this.id);
  }
  ngAfterViewChecked() {}
}
