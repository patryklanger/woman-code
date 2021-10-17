import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAppDesktopComponent } from './about-app-desktop.component';

describe('AboutAppDesktopComponent', () => {
  let component: AboutAppDesktopComponent;
  let fixture: ComponentFixture<AboutAppDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAppDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAppDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
