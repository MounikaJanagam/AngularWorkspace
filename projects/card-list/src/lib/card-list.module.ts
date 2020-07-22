import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'



@NgModule({
  declarations: [CardListComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [CardListComponent]
})
export class CardListModule { }
