import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFuncionamientoComponent } from './home-funcionamiento.component';

describe('HomeFuncionamientoComponent', () => {
  let component: HomeFuncionamientoComponent;
  let fixture: ComponentFixture<HomeFuncionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFuncionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFuncionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
