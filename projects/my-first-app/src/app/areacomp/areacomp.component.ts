import { areacontent } from './../areacontent';
import { areachart } from './../../../../area-chart/src/lib/areachart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areacomp',
  templateUrl: './areacomp.component.html',
  styleUrls: ['./areacomp.component.css']
})
export class AreacompComponent implements OnInit {


  constructor() { }
  public area : areachart = areacontent;
  showAreaHtml: boolean = false;
  showAreaTs: boolean = false;
  showAreaCss: boolean = false;
  toggleHtml(){
    this.showAreaTs =false;
    this.showAreaCss =false;
    this.showAreaHtml = !this.showAreaHtml;
  }
  toggleTs(){
    this.showAreaHtml =false;
    this.showAreaCss =false;
    this.showAreaTs = !this.showAreaTs;
  }
  toggleCss(){
    this.showAreaTs =false;
    this.showAreaHtml =false;
    this.showAreaCss = !this.showAreaCss;
}
  public areaHtmlCode =
  `<div id="chart">
  <apx-chart
    [series]="chartOptions.series"
    [chart]="chartOptions.chart"
    [xaxis]="chartOptions.xaxis"
    [stroke]="chartOptions.stroke"
    [tooltip]="chartOptions.tooltip"
    [dataLabels]="chartOptions.dataLabels"
  ></apx-chart>
</div>
`;
  public areaCssCode =
  `#chart {
    max-width: 650px;
  }
  `;
  public areaTsCode =
  `import { areachart } from './areachart';
  import { Component, OnInit, Input, OnChanges, SimpleChanges   } from '@angular/core';
  
  import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTooltip,
    ApexStroke
  } from "ng-apexcharts";
  
  export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
  };
  
  
  @Component({
    selector: 'lib-area-chart',
    templateUrl: 'area-chart.component.html',
    styleUrls: [ 'area-chart.component.css'
    ]
  })
  export class AreaChartComponent implements OnInit,OnChanges {
  
    public chartOptions: Partial<ChartOptions>;
    @Input()
    public areadata : areachart;
  
    constructor() {
      
    }
    ngOnChanges(changes: SimpleChanges): void {
      if (typeof changes["areadata"] != "undefined"){
        this.chartOptions = {
          series: [
            {
              name: this.areadata.name1,
              data: this.areadata.data1
            },
            {
              name: this.areadata.name2,
              data: this.areadata.data2
            }
          ],
          chart: {
            height: 350,
            type: "area"
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            type: "datetime",
            categories: this.areadata.categories
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm"
            }
          }
        };
      }
    }
  
    public generateData(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
  
    ngOnInit(): void {
    }
  
  }
  `;


  ngOnInit(): void {
  }

}
