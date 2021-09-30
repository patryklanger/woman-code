import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTitleLeftComponent } from './par-title-left.component';

describe('ParTitleLeftComponent', () => {
  let component: ParTitleLeftComponent;
  let fixture: ComponentFixture<ParTitleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParTitleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTitleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
