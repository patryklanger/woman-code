import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() imgs: string[] = [
    'assets/gallery/1.png',
    'assets/gallery/2.png',
    'assets/gallery/3.png',
    'assets/gallery/4.png',
    'assets/gallery/5.png',
    'assets/gallery/6.png',
  ];

  firstRowImgs: string[] = [];
  secondRowImgs: string[] = [];

  constructor() {}

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
    console.log(this.firstRowImgs);
    console.log(this.secondRowImgs);
  }
}
