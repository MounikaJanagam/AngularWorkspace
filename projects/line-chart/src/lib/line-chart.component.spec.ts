import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';
import { linechart } from './linechart';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('input should be correct',()=>{
    const input:linechart={
      name1:"sessions",
      name2:"sessions(previous 30 days)",
      data1:[28, 15, 33, 35, 20, 15],
      data2:[12, 17, 24, 18, 17, 13],
      categories:["Jun 8", "Jun 13", "Jun 18", "Jun 23", "Jun 28", "Jul 3"],
      title:"Statistics",
      colors:["#77B6EA", "#545454"],
      xaxis:"Month",
      yaxis:"Values"
  };
    component.linedata=input;
    expect(component.linedata).toEqual(input);
  })
});
