import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRequisitosComponent } from './home-requisitos.component';

describe('HomeRequisitosComponent', () => {
  let component: HomeRequisitosComponent;
  let fixture: ComponentFixture<HomeRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRequisitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
