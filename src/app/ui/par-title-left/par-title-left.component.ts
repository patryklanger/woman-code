import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-par-title-left',
  templateUrl: './par-title-left.component.html',
  styleUrls: ['./par-title-left.component.scss'],
})
export class ParTitleLeftComponent implements OnInit {
  @Input() mode: {
    title: string;
    content: string;
    img: string;
    color?: string;
    textAlign?: string;
  };

  centered = false;
  textAlign = 'right';

  @Output() nextClicked = new EventEmitter();
  constructor() {
    this.mode = {
      title: '',
      content: '',
      img: '',
    };

    if (this.mode.color == undefined) this.mode.color = '#B7BDC8';

    this.centered
      ? (this.mode.textAlign = 'center')
      : (this.textAlign = 'right');
  }
  onNextClicked() {
    this.nextClicked.emit();
  }

  ngOnInit(): void {}
}
