import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridcomp',
  templateUrl: './gridcomp.component.html',
  styleUrls: ['./gridcomp.component.css']
})
export class GridcompComponent implements OnInit {

  showGridHtml: boolean = true;
  showGridTs: boolean = false;
  showGridCss: boolean = false;
  toggleHtml(){
    this.showGridCss =false;
    this.showGridTs =false;
    this.showGridHtml = !this.showGridHtml;
  }
  toggleTs(){
    this.showGridHtml =false;
    this.showGridCss =false;
    this.showGridTs = !this.showGridTs;
  }
  toggleCss(){
    this.showGridTs =false;
    this.showGridHtml =false;
    this.showGridCss = !this.showGridCss;
  }
  public gridHtmlCode = 
  `<mat-card>
  <mat-grid-list cols="2" rowHeight="150px">
      <mat-grid-tile [style.background]="'#87CEFA'"><mat-icon class="icon" >shopping_cart</mat-icon>
          <span class="values">750 <mat-icon class="pos">arrow_upward</mat-icon><br><br><span class="names">Sales</span></span>
          <span class="names"></span>
      </mat-grid-tile>
      <mat-grid-tile [style.background]="'#00FA9A'"><mat-icon class="icon">visibility</mat-icon>
          <span class="values">1,700<mat-icon class="pos">arrow_upward</mat-icon><br><br><span class="names">Visitors</span></span>
      </mat-grid-tile>
      <mat-grid-tile [style.background]="'#FF8C00'"><mat-icon class="icon">monetization_on</mat-icon>
          <span class="values">1,200<mat-icon class="pos">arrow_upward</mat-icon><br><br><span class="names">Revenue</span></span>
      </mat-grid-tile>
      <mat-grid-tile [style.background]="'#00BFFF'"><mat-icon class="icon">people_alt</mat-icon>
          <span class="values">1,020<mat-icon class="pos">arrow_downward</mat-icon><br><br><span class="names">Subscribers</span></span>
      </mat-grid-tile>
    </mat-grid-list>
  </mat-card>`;
  public gridTsCode = 
  `import { grid } from './grid';
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'lib-shopping-grid',
    templateUrl: 'shopping-grid.component.html',
    styleUrls: [ 'shopping-grid.component.css'
    ]
  })
  export class ShoppingGridComponent implements OnInit {
   
    public gridItems : grid[] ;
    constructor() { }
    ngOnInit(): void {
    }
  }
  `;
  public gridCssCode = 
  `@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

  .mat-card{
      width: 50%;
  }
  
  .mat-grid.list{
      width: 500px;
  }
  .icon{
      position: relative;
      left: -100px;
      font-size: 60px;
  
  }
  .values{
      font-size: 25px;
      position: relative;
      right: -100px;
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
