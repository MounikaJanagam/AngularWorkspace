import { NgModule } from '@angular/core';
import { ProductTableComponent } from './product-table.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [ProductTableComponent],
  imports: [
    MatGridListModule,
    MatTableModule
  ],
  exports: [ProductTableComponent]
})
export class ProductTableModule { }
