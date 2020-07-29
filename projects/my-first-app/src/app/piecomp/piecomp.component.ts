import { Component, OnInit } from '@angular/core';
import { data } from 'projects/pie-chart/src/lib/data';
import { piecontent } from '../piecontent';

@Component({
  selector: 'app-piecomp',
  templateUrl: './piecomp.component.html',
  styleUrls: ['./piecomp.component.css']
})
export class PiecompComponent implements OnInit {
  
  
  public pie : data = piecontent;
  showPieHtml: boolean = true;
  showPieTs: boolean = false;
  showPieCss: boolean = false;
  toggleHtml(){
    this.showPieTs =false;
    this.showPieCss =false;
    this.showPieHtml = !this.showPieHtml;
  }
  toggleTs(){
    this.showPieHtml =false;
    this.showPieCss =false;
    this.showPieTs = !this.showPieTs;
  }
  toggleCss(){
    this.showPieTs =false;
    this.showPieHtml =false;
    this.showPieCss = !this.showPieCss;
}
  public pieHtmlCode = 
  `<div id="chart">
      <apx-chart
        [series]="chartOptions.series"
        [chart]="chartOptions.chart"
        [labels]="chartOptions.labels"
        [responsive]="chartOptions.responsive"
      ></apx-chart>
    </div>
    
  `;
  public pieTsCode = 
  `import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';
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
  `;
  public pieCssCode = 
  `#chart {
    max-width: 380px;
    padding: 0;
    }
  
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
