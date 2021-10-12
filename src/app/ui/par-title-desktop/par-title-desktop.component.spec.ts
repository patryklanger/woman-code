import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTitleDesktopComponent } from './par-title-desktop.component';

describe('ParTitleDesktopComponent', () => {
  let component: ParTitleDesktopComponent;
  let fixture: ComponentFixture<ParTitleDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParTitleDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTitleDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
