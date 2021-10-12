import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DektopMenuButtonComponent } from './dektop-menu-button.component';

describe('DektopMenuButtonComponent', () => {
  let component: DektopMenuButtonComponent;
  let fixture: ComponentFixture<DektopMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DektopMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DektopMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
