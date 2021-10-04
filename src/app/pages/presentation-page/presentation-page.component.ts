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
      img: 'assets/anim/modes/1.png',
      textAlign: 'right',
    },
    {
      title: 'Sex',
      content:
        'Dostaniesz powiadomienia o dniach kiedy Twoja kobieta ma ochotę na sex jest to bezpiecznych okresach, kiedy ryzyko poczęcia jest niskie i moecie cieszyć się seksem bez obaw o niechcianą ciązę.',
      img: 'assets/anim/modes/2.png',
      color: '#FFD012',
    },
    {
      title: 'Child',
      content:
        '3 dni przed dniami płodnymi od partnerki dostaniesz powiadomienie z zaleceniami np. odstawienie kofeiny, papierosów, zaprzestanie masturbacji oraz aplikacja poinformuje Cię o największej ochocie na zblienia i poczucui bycia atrakcyjną seksualnie Twojej partnerki',
      img: 'assets/anim/modes/3.png',
      color: '#5FAAE3',
    },
    {
      title: 'No period',
      content:
        'Pomocna informacja przy planowaniu wspólnych wakacji, długich powaznych rozmow czy zwiększonego wysiłku fizycznego. Jest to moment na długie dyskusje i rozmowy',
      img: 'assets/anim/modes/4.png',
      color: '#6B7FE8',
    },
    {
      title: 'Menstruation',
      content:
        'W tym okresie lepiej nie poruszać tematów trudnych z swoją kobietą. Twoja partnerka z racji rozpoczęcia się krawienia może być zmęczona, czuć się ociężała i nieatrakcyjna. Twoje wsparcie w tym czasie będzie nieocenione.',
      img: 'assets/anim/modes/5.png',
      color: '#C64F90',
    },
  ];
  hormons = [
    {
      title: "Hormon's",
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: 'assets/anim/hormons/1.png',
    },
    {
      title: 'Estrogen',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: 'assets/anim/hormons/2.png',
      color: '#70C5CB',
    },
    {
      title: 'Progesteron',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: 'assets/anim/hormons/3.png',
      color: '#CB6A2D',
    },
    {
      title: 'FSH',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: 'assets/anim/hormons/4.png',
      color: '#94B700',
    },
    {
      title: 'Lutropina',
      content:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Bibendum Porttitor Nunc, Ac Pretium Elit Fringilla Consequat. Vestibulum Ultricies Dui Et Urna Tincidunt, Sed Tempor Dolor Pulvinar.',
      img: 'assets/anim/hormons/5.png',
      color: '#AC9800',
    },
  ];
  calendar = [
    {
      title: 'Calendar',
      content:
        'Dzięki tej funkcji mozez zobaczyć w jakim dniu cyklu będzie Twoja kobieta i to na 3 miesiące do przodu. Dowiesz się jak wtedy zachować się do danej sytuacji hormonalnej. Dzięki temu moesz zaplanować sobie urlop czy inne plany z kobietą. Aplikacja będzie dostarczać Tobie',
      img: 'assets/presentation/modes/11.png',
    },
  ];
  follicleIcon = [
    {
      title: 'Follicle icon',
      content:
        'Mniej więcej w połowie cyklu miesiaczkowego, pod wypływem hormonu luteinizującego, następnie pod wpływem hormonów uwolni komórkę jajową, która przez 12 godzin będzie gotowa do zapłodnienia. Tu znowu natura jest górą i my faceci musimy się do tego dostosować ;) 13 dzień jest dniem, kiedy pęcherzyk średnio pęka ;)',
      img: '',
    },
  ];
  aboutApp = [
    {
      title: 'About App',
      content:
        'WOMAN CODE ma za zadanie, zeby naze kobiety byla dla nas bardziej przewidywalne i mile!!! Aplikacja dla mezczyzn, ktorzy staraja sie o dziecko. Jak wiadomo, zeby nasze plemniki mogly sie polaczyc z komorka naszej kobiety musza byc silne i wypoczte i byc w odpowiednim czasie i lokalizacji',
      img: 'assets/presentation/modes/11.png',
      color: '#FFD012',
    },
  ];
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
  constructor() {}

  ngOnInit(): void {}
}
