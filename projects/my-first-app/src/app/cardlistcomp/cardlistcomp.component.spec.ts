import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistcompComponent } from './cardlistcomp.component';

describe('CardlistcompComponent', () => {
  let component: CardlistcompComponent;
  let fixture: ComponentFixture<CardlistcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardlistcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlistcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
