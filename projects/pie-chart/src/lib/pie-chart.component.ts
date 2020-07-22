import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { data } from './data';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'lib-pie-chart',
  templateUrl: 'pie-chart.component.html',
  styleUrls: [
    'pie-chart.component.css'
  ]
})
export class PieChartComponent implements OnInit,OnChanges {

  public chartOptions: Partial<ChartOptions>;
  
  @Input()
  public piedata : data;

  constructor() { 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes["piedata"] != "undefined") {
      this.chartOptions = {
        series: this.piedata.series1,
        chart: {
          type: "donut"
        },
        labels: this.piedata.label,
  
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }
  }

  ngOnInit(): void {
  }

}
