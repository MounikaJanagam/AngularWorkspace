import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcompComponent } from './gridcomp.component';

describe('GridcompComponent', () => {
  let component: GridcompComponent;
  let fixture: ComponentFixture<GridcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
