import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormedCharacterComponent } from './list-formed-character.component';

describe('ListFormedCharacterComponent', () => {
  let component: ListFormedCharacterComponent;
  let fixture: ComponentFixture<ListFormedCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormedCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormedCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
