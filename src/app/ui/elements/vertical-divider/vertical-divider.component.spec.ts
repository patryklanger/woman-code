import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDividerComponent } from './vertical-divider.component';

describe('VerticalDividerComponent', () => {
  let component: VerticalDividerComponent;
  let fixture: ComponentFixture<VerticalDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
