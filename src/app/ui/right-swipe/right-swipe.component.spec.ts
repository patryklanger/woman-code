import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSwipeComponent } from './right-swipe.component';

describe('RightSwipeComponent', () => {
  let component: RightSwipeComponent;
  let fixture: ComponentFixture<RightSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
