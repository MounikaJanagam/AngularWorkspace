import { NgModule } from '@angular/core';
import { LineChartComponent } from './line-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [LineChartComponent],
  imports: [
    NgApexchartsModule
  ],
  exports: [LineChartComponent]
})
export class LineChartModule { }
