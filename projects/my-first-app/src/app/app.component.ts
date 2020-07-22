import { linecontent } from './linecontent';
import { barvalues } from './../../../progress-bar/src/lib/barvalues';
import { cardcontent } from './cardcontent';
import { progressbarcontent } from './progressbarcontent';
import { piecontent } from './piecontent';
import { data } from 'projects/pie-chart/src/lib/data';
import { Component } from '@angular/core';
import { List } from 'projects/card-list/src/lib/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
 // public cardcomp : List[] = cardcontent; 
  public progressbarcomp : barvalues[] = progressbarcontent;
  public str : string = "Mounika";
}