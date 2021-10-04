import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-bg',
  templateUrl: './photo-bg.component.html',
  styleUrls: ['./photo-bg.component.scss'],
})
export class PhotoBgComponent implements OnInit {
  @Input() photo = '';
  constructor() {}

  ngOnInit(): void {}
}
