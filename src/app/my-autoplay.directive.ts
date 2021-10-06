import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-autoplay]',
})
export class MyAutoplayDirective {
  constructor(public element: ElementRef) {}
  public ngOnInit(): void {
    let vid = this.element.nativeElement;
    vid.muted = true;
    vid.play();
  }
}
