import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent implements OnInit {
  constructor() {}
  onGoogleStoreClicked() {
    window.location.href =
      'https://drive.google.com/drive/folders/1cIdHl3sf-IlhpAq2vg6dJEgjjoV2Anuj?usp=sharing';
  }
  ngOnInit(): void {}
}
