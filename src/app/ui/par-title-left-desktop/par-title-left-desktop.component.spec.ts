import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTitleLeftDesktopComponent } from './par-title-left-desktop.component';

describe('ParTitleLeftDesktopComponent', () => {
  let component: ParTitleLeftDesktopComponent;
  let fixture: ComponentFixture<ParTitleLeftDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParTitleLeftDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTitleLeftDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
