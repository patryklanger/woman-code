import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  opened = false;
  constructor() {}
  toggleMenuClick() {
    this.opened = !this.opened;
  }
  ngOnInit(): void {}
}
