import { tablecontent } from './../tablecontent';
import { Component, OnInit } from '@angular/core';
import { table } from 'projects/product-table/src/lib/table';

@Component({
  selector: 'app-tablecomp',
  templateUrl: './tablecomp.component.html',
  styleUrls: ['./tablecomp.component.css']
})
export class TablecompComponent implements OnInit {

  public prodtable : table[] = tablecontent;
  showTableHtml: boolean = true;
  showTableTs: boolean = false;
  showTableCss: boolean = false;
  toggleHtml(){
    this.showTableCss =false;
    this.showTableTs =false;
    this.showTableHtml = !this.showTableHtml;
  }
  toggleTs(){
    this.showTableHtml =false;
    this.showTableCss =false;
    this.showTableTs = !this.showTableTs;
  }
  toggleCss(){
    this.showTableTs =false;
    this.showTableHtml =false;
    this.showTableCss = !this.showTableCss;
  }
  public tableHtmlCode =
  `<table mat-table [dataSource]="items" class="mat-elevation-z8 rounded">

  <ng-container matColumnDef="Product" >
    <th mat-header-cell *matHeaderCellDef> Product </th>
    <td mat-cell *matCellDef="let element"> {{element.Product}} </td>
  </ng-container>

  <ng-container matColumnDef="Product_Detail_Views">
    <th mat-header-cell *matHeaderCellDef> Product Detail Views </th>
    <td mat-cell *matCellDef="let element"> {{element.Product_Detail_Views}} </td>
  </ng-container>

  <ng-container matColumnDef="Product_Adds_To_Cart">
    <th mat-header-cell *matHeaderCellDef> Product Adds To Cart </th>
    <td mat-cell *matCellDef="let element"> {{element.Product_Adds_To_Cart}} </td>
  </ng-container>

  <ng-container matColumnDef="Product_Revenue">
    <th mat-header-cell *matHeaderCellDef> Product Revenue </th>
    <td mat-cell *matCellDef="let element"> {{element.Product_Revenue}} </td>
  </ng-container>

  <ng-container matColumnDef="Product_Revenue_per_Purchase">
      <th mat-header-cell *matHeaderCellDef> Product Revenue per Purchase </th>
      <td mat-cell *matCellDef="let element"> {{element.Product_Revenue_per_Purchase}} </td>
    </ng-container>

    <ng-container matColumnDef="Cart_to_Detail_Rate">
      <th mat-header-cell *matHeaderCellDef> Cart-to-Detail Rate </th>
      <td mat-cell *matCellDef="let element"> {{element.Cart_to_Detail_Rate}} </td>
    </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns" style="color: blanchedalmond;"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
`;

  public tableTsCode =
  `import { table} from './table';
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
  `;

  public tableCssCode =
  `table {
    width: 1000px;
    align-content: center;
  }
.mat-header-row{
  background-color: #000080;
}
.mat-header-cell{
    color:white;
    font-size: 18px;
}
.mat-column-Product{
    width: 300px;
}
.mat-column-Product_Adds_To_Cart{
    width: 130px;
}

.mat-column-Product_Revenue_per_Purchase{
    width: 150px;
}`;
  constructor() { }

  ngOnInit(): void {
  }

}
