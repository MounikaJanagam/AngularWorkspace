import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    BrowserModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule { }
