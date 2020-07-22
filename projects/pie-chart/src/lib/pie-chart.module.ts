import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [PieChartComponent],
  imports: [
    NgApexchartsModule
  ],
  exports: [PieChartComponent]
})
export class PieChartModule { }
