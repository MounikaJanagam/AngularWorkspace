import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-reportcomp',
  templateUrl: './weather-reportcomp.component.html',
  styleUrls: ['./weather-reportcomp.component.css']
})
export class WeatherReportcompComponent implements OnInit {

  showHtml: boolean = true;
  showTs: boolean = false;
  showCss: boolean = false;
  toggleHtml(){
    this.showCss =false;
    this.showTs =false;
    this.showHtml = !this.showHtml;
  }
  toggleTs(){
    this.showHtml =false;
    this.showCss =false;
    this.showTs = !this.showTs;
  }
  toggleCss(){
    this.showTs =false;
    this.showHtml =false;
    this.showCss = !this.showCss;
  }
  public HtmlCode = 
  `<mat-card>
  <mat-grid-list cols="2" rowHeight="150px" [style.background]="'#87CEFA'">
      <mat-grid-tile>
          <mat-icon class="icon" aria-hidden="false" aria-label="Example home icon">
          cloud_circle
         </mat-icon>
      </mat-grid-tile>
      <mat-grid-tile >
          <span>
          <span class="degree">25°</span><br>
          <span class="loc">
          <mat-icon aria-hidden="false" aria-label="Example home icon">
           location_on
          </mat-icon>London</span>
          </span>
      </mat-grid-tile>
  </mat-grid-list>
  <mat-grid-list cols="4" rowHeight="150px" [style.background]="'#87CEFA'">
      <mat-grid-tile>
          <span>  Mon<br>
          <mat-icon class="icons" aria-hidden="false" aria-label="Example home icon">
          cloud_queue
          </mat-icon><br><br>
          27°
          </span>
      </mat-grid-tile>
      <mat-grid-tile>
          <span> Tue<br>
              <mat-icon class="icons" aria-hidden="false" aria-label="Example home icon">
              cloud_queue
              </mat-icon><br>
              23°
              </span>
      </mat-grid-tile>
      <mat-grid-tile>
          <span>  Wed<br>
              <mat-icon class="icons" aria-hidden="false" aria-label="Example home icon">
              cloud_queue
              </mat-icon><br>
              19°
              </span>
      </mat-grid-tile>
      <mat-grid-tile>
          <span>  Thu<br>
              <mat-icon class="icons" aria-hidden="false" aria-label="Example home icon">
              filter_drama
              </mat-icon><br>
              38°
              </span>
      </mat-grid-tile> 
  </mat-grid-list>
  </mat-card>`;

  public CssCode = 
  `.icon{
    position: absolute;
    top: 2px;
    left: 25px;
    font-size: 130px;
}
.icons{
    font-size: 40px;
}
.degree{
    font-size: 60px;
    position: absolute;
    
}
.mat-card{
    width: 50%;
}
.loc{
    position: absolute;
    bottom: 5px;
}`;
  public TsCode = 
  `import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'lib-weather-report',
    templateUrl: 'weather-report.component.html',
    styleUrls: [ 'weather-report.component.css'
    ]
  })
  export class WeatherReportComponent implements OnInit {
  
    constructor() { }
     
    ngOnInit(): void {
    }
  
  }
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
