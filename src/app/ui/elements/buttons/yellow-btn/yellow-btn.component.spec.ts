import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowBtnComponent } from './yellow-btn.component';

describe('YellowBtnComponent', () => {
  let component: YellowBtnComponent;
  let fixture: ComponentFixture<YellowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
