import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YelBorderBtnComponent } from './yel-border-btn.component';

describe('YelBorderBtnComponent', () => {
  let component: YelBorderBtnComponent;
  let fixture: ComponentFixture<YelBorderBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YelBorderBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YelBorderBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
