import { grid, tiles } from './grid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shopping-grid',
  templateUrl: 'shopping-grid.component.html',
  styleUrls: [ 'shopping-grid.component.css'
  ]
})
export class ShoppingGridComponent implements OnInit {
 
  public gridItems : grid[]=tiles ;
  constructor() { }
  ngOnInit(): void {
  }

}
