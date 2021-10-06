import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  constructor() {}
  @ViewChild('videoPlayer') player: ElementRef;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.player.nativeElement.play();
  }
}
