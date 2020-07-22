import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecompComponent } from './piecomp.component';

describe('PiecompComponent', () => {
  let component: PiecompComponent;
  let fixture: ComponentFixture<PiecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
