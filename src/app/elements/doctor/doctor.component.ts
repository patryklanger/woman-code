import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  @Input() doctor = {
    img: '',
    description: '',
    name: '',
    link: '',
  };

  @Input() last = false;

  constructor() {}

  ngOnInit(): void {}
}
