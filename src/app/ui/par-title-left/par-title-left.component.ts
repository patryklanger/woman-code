import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderType } from 'src/app/ui/right-swipe/right-swipe.component';

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
  SliderType = SliderType;
  @Input() type = SliderType.hormons;
  centered = false;
  textAlign = 'right';
  @Input() last = false;
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
