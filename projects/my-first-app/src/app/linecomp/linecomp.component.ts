import { linechart } from './../../../../line-chart/src/lib/linechart';
import { Component, OnInit } from '@angular/core';
import { linecontent } from '../linecontent';

@Component({
  selector: 'app-linecomp',
  templateUrl: './linecomp.component.html',
  styleUrls: ['./linecomp.component.css']
})
export class LinecompComponent implements OnInit {

  public line : linechart = linecontent;
  showLineHtml: boolean = true;
  showLineTs: boolean = false;
  showLineCss: boolean = false;
  toggleHtml(){
    this.showLineTs =false;
    this.showLineCss =false;
    this.showLineHtml = !this.showLineHtml;
  }
  toggleTs(){
    this.showLineHtml =false;
    this.showLineCss =false;
    this.showLineTs = !this.showLineTs;
  }
  toggleCss(){
    this.showLineTs =false;
    this.showLineHtml =false;
    this.showLineCss = !this.showLineCss;
}
  public lineHtmlCode =
  `<div id="chart">
  <apx-chart
    [series]="chartOptions.series"
    [chart]="chartOptions.chart"
    [xaxis]="chartOptions.xaxis"
    [stroke]="chartOptions.stroke"
    [colors]="chartOptions.colors"
    [dataLabels]="chartOptions.dataLabels"
    [legend]="chartOptions.legend"
    [markers]="chartOptions.markers"
    [grid]="chartOptions.grid"
    [yaxis]="chartOptions.yaxis"
    [title]="chartOptions.title"
  ></apx-chart>
</div>`;
  public lineCssCode =
  `#chart {
    max-width: 650px;
  }
  `;
  public lineTsCode =
  `import { linechart } from './linechart';
  import { Component, OnInit,ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
  import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexTitleSubtitle,
    ApexLegend
  } from "ng-apexcharts";
  
  export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    colors: string[];
    yaxis: ApexYAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
  };
  
  @Component({
    selector: 'lib-line-chart',
    templateUrl: 'line-chart.component.html',
    styleUrls: [ 'line-chart.component.css'
    ]
  })
  export class LineChartComponent implements OnInit,OnChanges {
  
    @Input()
    public linedata : linechart;
    public chartOptions: Partial<ChartOptions>;
    constructor() {
      
     }
    ngOnChanges(changes: SimpleChanges): void {
      if (typeof changes["linedata"] != "undefined"){
        this.chartOptions = {
          series: [
            {
              name: this.linedata.name1,
              data: this.linedata.data1
            },
            {
              name: this.linedata.name2,
              data: this.linedata.data2
            }
          ],
          chart: {
            height: 350,
            type: "line",
            dropShadow: {
              enabled: true,
              color: "#000",
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
          }
          },
          colors: this.linedata.colors,
          dataLabels: {
            enabled: true
          },
          stroke: {
            curve: "smooth"
          },
          title: {
            text: "",
            align: "left"
          },
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["#f3f3f3", "transparent"],   
              opacity: 0.5
            }
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: this.linedata.categories,
            title: {
              text: ""
            }
          },
          yaxis: {
            title: {
              text: ""
            },
            min: 0,
            max: 35
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        };
      }
    }
  
    ngOnInit(): void {
    }
  
  }
  
  `;


  constructor() { }

  ngOnInit(): void {
  }

}
