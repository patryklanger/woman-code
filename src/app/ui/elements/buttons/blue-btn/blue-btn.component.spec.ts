import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBtnComponent } from './blue-btn.component';

describe('BlueBtnComponent', () => {
  let component: BlueBtnComponent;
  let fixture: ComponentFixture<BlueBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
