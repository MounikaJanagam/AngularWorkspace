import { barchartdata } from './barchartdata';
import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};


@Component({
  selector: 'lib-barchart',
  templateUrl: 'barchart.component.html',
  styleUrls: [
    'barchart.component.css'
  ]
})
export class BarchartComponent implements OnInit,OnChanges {

  public chartOptions: Partial<ChartOptions>;
  @Input()
  public bardata : barchartdata;

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes["bardata"] != "undefined"){
    this.chartOptions = {
      series: [
        {
          name: this.bardata.name1,
          data: this.bardata.data1
        },
        {
          name: this.bardata.name2,

          data: this.bardata.data2
        }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          },
          colors :{
            ranges:[{
              color : "orange"
            }]
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.bardata.categories
      }
    };
    }
  }
  ngOnInit(): void {
  }

}
