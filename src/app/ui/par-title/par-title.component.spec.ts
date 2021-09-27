import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTitleComponent } from './par-title.component';

describe('ParTitleComponent', () => {
  let component: ParTitleComponent;
  let fixture: ComponentFixture<ParTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
