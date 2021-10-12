import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dektop-menu-button',
  templateUrl: './dektop-menu-button.component.html',
  styleUrls: ['./dektop-menu-button.component.scss'],
})
export class DektopMenuButtonComponent implements OnInit {
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
