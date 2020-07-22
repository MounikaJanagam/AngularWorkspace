import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcompComponent } from './barcomp.component';

describe('BarcompComponent', () => {
  let component: BarcompComponent;
  let fixture: ComponentFixture<BarcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
