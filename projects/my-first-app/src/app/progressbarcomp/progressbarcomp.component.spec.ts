import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarcompComponent } from './progressbarcomp.component';

describe('ProgressbarcompComponent', () => {
  let component: ProgressbarcompComponent;
  let fixture: ComponentFixture<ProgressbarcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
