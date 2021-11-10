import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAbstractComponent } from './home-abstract.component';

describe('HomeAbstractComponent', () => {
  let component: HomeAbstractComponent;
  let fixture: ComponentFixture<HomeAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
