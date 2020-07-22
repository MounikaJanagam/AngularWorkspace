import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { ShoppingGridComponent } from './shopping-grid.component';



@NgModule({
  declarations: [ShoppingGridComponent],
  imports: [
    MatGridListModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [ShoppingGridComponent]
})
export class ShoppingGridModule { }
