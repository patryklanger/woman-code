import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  constructor() {}
  @Input() notCenter = false;
  toGoogleStore() {
    window.location.href =
      'https://drive.google.com/drive/folders/1cIdHl3sf-IlhpAq2vg6dJEgjjoV2Anuj?usp=sharing';
  }
  ngOnInit(): void {}
}
