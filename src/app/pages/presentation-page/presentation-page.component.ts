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
      title: 'Modes',
      content:
        'The most important function of the application. Thanks to it, you can conceive a child, have a weekend together, have a party with friends, or we can simply connect and have sex. Click on a mode and see how it works.',
      img: 'assets/anim/modes/1.png',
      textAlign: 'right',
    },
    {
      title: 'Sex',
      content:
        "You will get notifications when your partner wants to have sex and about 'safe' periods when the risk of conception is low and you can enjoy sex without worrying about an unwanted pregnancy.",
      img: 'assets/anim/modes/2.png',
      color: '#FFD012',
    },
    {
      title: 'Child',
      content:
        '3 days before the fertile days, you will receive a notification from your partner with health recommendations, thanks to which we have a better chance of success.',
      img: 'assets/anim/modes/3.png',
      color: '#5FAAE3',
    },
    {
      title: 'Not fertile',
      content:
        'Helpful information when planning a joint vacation, long, serious conversations or increased physical exertion.',
      img: 'assets/anim/modes/4.png',
      color: '#6B7FE8',
    },
    {
      title: 'Menstruation',
      content:
        '5 days before your period, we will keep you informed about your period. Your support during this time will be invaluable.',
      img: 'assets/anim/modes/5.png',
      color: '#C64F90',
    },
  ];
  hormons = [
    {
      title: "Hormon's",
      content:
        "A feature that will help you understand women's behavior. Hormones have a huge impact, among others on well-being. The 4 most important hormones that are activated on a specific basis and at the right time. Science doesn't lie, check it out!",
      img: 'assets/anim/hormons/1.png',
    },
    {
      title: 'Estrogen',
      content:
        'A hormone responsible for the sense of femininity, increased libido, positive mood and agency. Estrogen helps to create the environment in the uterus in case of pregnancy.',
      img: 'assets/anim/hormons/2.png',
      color: '#70C5CB',
    },
    {
      title: 'Progesteron',
      content:
        'It works for emotional balance, calms the libido after ovulation, contributes to well-being. Responsible for regulating the menstrual cycle and maintaining pregnancy.',
      img: 'assets/anim/hormons/3.png',
      color: '#CB6A2D',
    },
    {
      title: 'FSH',
      content: 'It stimulates the growth of follicles in the ovary.',
      img: 'assets/anim/hormons/4.png',
      color: '#94B700',
    },
    {
      title: 'Lutropina',
      content: 'Releases the egg from the follicle.',
      img: 'assets/anim/hormons/5.png',
      color: '#AC9800',
    },
  ];
  calendar = [
    {
      title: 'Calendar',
      content:
        'Thanks to this function, you can see 3 months in advance on what day of the cycle your woman will be. In combination with other functions of the application, you will be able to match the date of your dream vacation or other plans and nothing will spoil you. If the cycle changes, we will let you know.',
      img: 'assets/presentation/calendar.png',
    },
  ];
  follicleIcon = [
    {
      title: 'Follicle icon',
      content:
        "Bubble visualization showing the interference of the follicles on the female cycle. For example, under the influence of the luteinizing hormone, the follicle ruptures and it will release the egg, which will be ready for fertilization for 12 hours. Remember, you can't fool nature.",
      img: 'assets/presentation/follicle.png',
    },
  ];
  aboutApp = [
    {
      title: 'About App',
      content:
        'WOMAN CODE ma za zadanie, zeby naze kobiety byla dla nas bardziej przewidywalne i mile!!! Aplikacja dla mezczyzn, ktorzy staraja sie o dziecko. Jak wiadomo, zeby nasze plemniki mogly sie polaczyc z komorka naszej kobiety musza byc silne i wypoczte i byc w odpowiednim czasie i lokalizacji',
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
