import { NgModule } from '@angular/core';
import { BarchartComponent } from './barchart.component';
import {NgApexchartsModule} from 'ng-apexcharts';


@NgModule({
  declarations: [BarchartComponent],
  imports: [
    NgApexchartsModule
  ],
  exports: [BarchartComponent]
})
export class BarchartModule { }
