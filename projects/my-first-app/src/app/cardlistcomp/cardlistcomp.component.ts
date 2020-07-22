import { Component, OnInit } from '@angular/core';
import { cardcontent } from '../cardcontent';
import { List } from 'projects/card-list/src/lib/list';

@Component({
  selector: 'app-cardlistcomp',
  templateUrl: './cardlistcomp.component.html',
  styleUrls: ['./cardlistcomp.component.css']
})
export class CardlistcompComponent implements OnInit {

  public gridlist : List[] = cardcontent;
  showListHtml: boolean = false;
  showListTs: boolean = false;
  showListCss: boolean = false;
  toggleHtml(){
    this.showListTs =false;
    this.showListCss =false;
    this.showListHtml = !this.showListHtml;
  }
  toggleTs(){
    this.showListHtml =false;
    this.showListCss =false;
    this.showListTs = !this.showListTs;
  }
  toggleCss(){
    this.showListTs =false;
    this.showListHtml =false;
    this.showListCss = !this.showListCss;
}
  public ListHtmlCode =
  `<div class="grid">
  <mat-grid-list cols="2" rowHeight="2:1" [gutterSize]="'0px'">
    <mat-grid-tile *ngFor="let i of listItems">
      <div>
         <span style="font-size:large;font-family:'Trebuchet MS';">{{i.name}}</span>
          <br><br>
          <span style="font-size:xx-large;">{{i.value}}</span>
      </div>
    </mat-grid-tile> 
    <!--<mat-grid-tile>Sessions<br>34.9K</mat-grid-tile>
    <mat-grid-tile>Revenue<br>$55K</mat-grid-tile>
    <mat-grid-tile>Converion Rate<br>1.0%</mat-grid-tile>
    <mat-grid-tile>Transactions<br>340.0</mat-grid-tile>>-->
  </mat-grid-list>
  </div>`;
  public ListCssCode =
  `.grid{
    height: 250px;
  }
  .mat-grid-tile{
     
      padding-left: 0px;
      background: #000080;
      
  }
  .mat-grid-list
  {
      width: 400px;
      color: white;
      font-size: 20px;  
  } 
  `;
  public ListTsCode =
  `
  import { Component, OnInit ,Input} from '@angular/core';
  import { List } from './list';
  
  @Component({
    selector: 'lib-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: [ './card-list.component.css'
    ]
  })
  export class CardListComponent implements OnInit {
  
    
    constructor() { }
    
    @Input()
    public listItems:List[];
  
    ngOnInit(): void {
    }
  
  }
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
