import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeaturesComponent } from './detail-features.component';

describe('DetailFeaturesComponent', () => {
  let component: DetailFeaturesComponent;
  let fixture: ComponentFixture<DetailFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
