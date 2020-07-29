import { barvalues } from './../../../../progress-bar/src/lib/barvalues';
import { Component, OnInit } from '@angular/core';
import { progressbarcontent } from '../progressbarcontent';

@Component({
  selector: 'app-progressbarcomp',
  templateUrl: './progressbarcomp.component.html',
  styleUrls: ['./progressbarcomp.component.css']
})
export class ProgressbarcompComponent implements OnInit {
 
  public progress : barvalues[] = progressbarcontent;
  showProgessHtml: boolean = true;
  showProgessTs: boolean = false;
  showProgessCss: boolean = false;
  toggleHtml(){
    this.showProgessCss =false;
    this.showProgessTs =false;
    this.showProgessHtml = !this.showProgessHtml;
  }
  toggleTs(){
    this.showProgessHtml =false;
    this.showProgessCss =false;
    this.showProgessTs = !this.showProgessTs;
  }
  toggleCss(){
    this.showProgessTs =false;
    this.showProgessHtml =false;
    this.showProgessCss = !this.showProgessCss;
  }
  public progressHtmlCode = 
  `<mat-card>
  <mat-card-title>This Month</mat-card-title>
  <mat-card-content>
   <div *ngFor="let i of getval" class="bar">
   <span class="name">{{i.name}} </span>
   <span class="value">{{i.value}}% </span>     
     <mat-progress-bar class="pb" mode="determinate" value={{i.value}} color={{i.color}}></mat-progress-bar><br>
   </div>
  </mat-card-content>
  </mat-card>`;

  public progressCssCode = 
  `@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
  .mat-card{
    width: 520px;
  }
  .mat-card-title{
    padding-bottom: 20px;
   
  }
  .pb{
      height:  10px;
  }
  .value{
      position: absolute;
      left: 475px;
  }
  .name,.value{
    font-size: 17px;
  }`;
  public progressTsCode = 
  `import { barvalues } from './barvalues';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: [ 'progress-bar.component.css'
  ]
})
export class ProgressBarComponent implements OnInit {

 
  @Input()
  public getval : barvalues[];
  constructor() { }
  ngOnInit(): void {
  }

}
`;

  constructor() { }

  ngOnInit(): void {
  }

}
