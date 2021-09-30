import { Component, OnInit } from '@angular/core';
import { SliderType } from 'src/app/ui/right-swipe/right-swipe.component';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss'],
})
export class PresentationPageComponent implements OnInit {
  SliderType = SliderType;
  modes = [
    {
      title: 'Tryby',
      content:
        'Aplikacja podpowie Ci kiedy bezpiecznie umówić sie z kolegami na piwo czy ryby, a kiedy bezpieczniej zostać w domu',
      img: 'assets/presentation/modes/1.png',
      textAlign: 'right',
    },
    {
      title: 'Sex',
      content:
        'Dostaniesz powiadomienia o dniach kiedy Twoja kobieta ma ochotę na sex jest to bezpiecznych okresach, kiedy ryzyko poczęcia jest niskie i moecie cieszyć się seksem bez obaw o niechcianą ciązę.',
      img: 'assets/presentation/modes/1.png',
      color: '#FFD012',
    },
    {
      title: 'Child',
      content:
        '3 dni przed dniami płodnymi od partnerki dostaniesz powiadomienie z zaleceniami np. odstawienie kofeiny, papierosów, zaprzestanie masturbacji oraz aplikacja poinformuje Cię o największej ochocie na zblienia i poczucui bycia atrakcyjną seksualnie Twojej partnerki',
      img: 'assets/presentation/modes/1.png',
      color: '#5FAAE3',
    },
    {
      title: 'No period',
      content:
        'Pomocna informacja przy planowaniu wspólnych wakacji, długich powaznych rozmow czy zwiększonego wysiłku fizycznego. Jest to moment na długie dyskusje i rozmowy',
      img: 'assets/presentation/modes/1.png',
      color: '#6B7FE8',
    },
  ];
  hormons = [
    {
      title: "Hormon's",
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: '',
    },
    {
      title: 'Estrogen',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: '',
      color: '#70C5CB',
    },
    {
      title: 'Progesteron',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: '',
      color: '#CB6A2D',
    },
    {
      title: 'FSH',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: '',
      color: '#94B700',
    },
    {
      title: 'Lutropina',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: '',
      color: '#AC9800',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
