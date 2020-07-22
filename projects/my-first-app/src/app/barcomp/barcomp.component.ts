import { barcontent } from './../barcontent';
import { barchartdata } from './../../../../barchart/src/lib/barchartdata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcomp',
  templateUrl: './barcomp.component.html',
  styleUrls: ['./barcomp.component.css']
})
export class BarcompComponent implements OnInit {

  public bar : barchartdata = barcontent;
  showBarHtml: boolean = false;
  showBarTs: boolean = false;
  showBarCss: boolean = false;
  toggleHtml(){
    this.showBarTs =false;
    this.showBarCss =false;
    this.showBarHtml = !this.showBarHtml;
  }
  toggleTs(){
    this.showBarHtml =false;
    this.showBarCss =false;
    this.showBarTs = !this.showBarTs;
  }
  toggleCss(){
    this.showBarTs =false;
    this.showBarHtml =false;
    this.showBarCss = !this.showBarCss;
}
  public barHtmlCode =
  `<div id="chart">
  <apx-chart
    [series]="chartOptions.series"
    [chart]="chartOptions.chart"
    [dataLabels]="chartOptions.dataLabels"
    [plotOptions]="chartOptions.plotOptions"
    [xaxis]="chartOptions.xaxis"
    [stroke]="chartOptions.stroke"
  ></apx-chart>
</div>
`;
  public barCssCode =
  `#chart {
    max-width: 650px;
  }
  `;
  public barTsCode =
  `import { barchart } from './../../barchart';
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
    public bardata : barchart;
  
    constructor() {
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
    ngOnChanges(changes: SimpleChanges): void {
      throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
    }
  
  }
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
