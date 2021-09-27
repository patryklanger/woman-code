import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
})
export class ScrollDownComponent implements OnInit {
  @Output() btnClicked = new EventEmitter();
  constructor() {}
  scrollClicked() {
    this.btnClicked.emit();
  }
  ngOnInit(): void {}
}
