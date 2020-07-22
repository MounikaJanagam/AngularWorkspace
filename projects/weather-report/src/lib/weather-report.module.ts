import { NgModule } from '@angular/core';
import { WeatherReportComponent } from './weather-report.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [WeatherReportComponent],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [WeatherReportComponent]
})
export class WeatherReportModule { }
