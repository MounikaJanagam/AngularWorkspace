import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportComponent } from './weather-report.component';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('color of the table is displayed correctly',()=>{
    const thead:HTMLElement=fixture.nativeElement.querySelector('thead');
    const color=thead.style.backgroundColor;
    expect(color).toEqual("rgb(15, 15, 66)");
  })
});
