import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportcompComponent } from './weather-reportcomp.component';

describe('WeatherReportcompComponent', () => {
  let component: WeatherReportcompComponent;
  let fixture: ComponentFixture<WeatherReportcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
