import { table} from './table';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'
  ]
})
export class ProductTableComponent implements OnInit {
i
  constructor() { }
  @Input()
  public items: table[];
  displayedColumns: string[] =  ['Product', 'Product_Detail_Views', 'Product_Adds_To_Cart', 'Product_Revenue','Product_Revenue_per_Purchase','Cart_to_Detail_Rate'];
  
 
  // public items : grid[];
  ngOnInit(): void {
  }

}
