import { NgModule } from '@angular/core';
import { AreaChartComponent } from './area-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [AreaChartComponent],
  imports: [
    NgApexchartsModule 
  ],
  exports: [AreaChartComponent]
})
export class AreaChartModule { }
