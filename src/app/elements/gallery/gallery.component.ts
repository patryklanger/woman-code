import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @ViewChild('firstRow') firstRowElement: ElementRef;
  @ViewChild('secondRow') secondRowElement: ElementRef;
  @Input() imgs: string[] = [
    'assets/gallery/1.png',
    'assets/gallery/2.png',
    'assets/gallery/3.png',
    'assets/gallery/4.png',
    'assets/gallery/5.png',
    'assets/gallery/6.png',
  ];

  @Input() desktop = false;

  firstRowImgs: string[] = [];
  secondRowImgs: string[] = [];

  constructor() {}
  onFirstRowElementMouseEnter(event: any) {
    event.srcElement.classList.add('activeElement');
    this.firstRowElement.nativeElement.classList.add('active');
  }
  onFirstRowElementMouseLeave(event: any) {
    event.srcElement.classList.remove('activeElement');
    this.firstRowElement.nativeElement.classList.remove('active');
  }
  onSecondRowElementMouseEnter(event: any) {
    event.srcElement.classList.add('activeElement');
    this.secondRowElement.nativeElement.classList.add('active');
  }
  onSecondRowElementMouseLeave(event: any) {
    event.srcElement.classList.remove('activeElement');
    this.secondRowElement.nativeElement.classList.remove('active');
  }

  ngOnInit(): void {
    if (this.imgs.length != 0)
      while (this.imgs.length < 6) {
        this.imgs.push(...this.imgs);
      }
    var indexToSlice = Math.floor(this.imgs.length / 2);
    this.firstRowImgs = this.imgs.slice(0, indexToSlice);
    this.secondRowImgs = this.imgs.slice(indexToSlice);
    this.firstRowImgs.push(...this.firstRowImgs);
    this.secondRowImgs.push(...this.secondRowImgs);
  }
}
