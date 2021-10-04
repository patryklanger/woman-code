import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBgComponent } from './photo-bg.component';

describe('PhotoBgComponent', () => {
  let component: PhotoBgComponent;
  let fixture: ComponentFixture<PhotoBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
