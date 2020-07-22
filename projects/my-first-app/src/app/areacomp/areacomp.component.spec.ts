import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacompComponent } from './areacomp.component';

describe('AreacompComponent', () => {
  let component: AreacompComponent;
  let fixture: ComponentFixture<AreacompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreacompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
