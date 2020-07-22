import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTableModule } from 'projects/product-table/src/public-api';
import { CardListModule } from 'projects/card-list/src/public-api';
import { NavbarModule } from 'projects/navbar/src/public-api';
import { MenubarModule } from 'projects/menubar/src/public-api';
import { ProgressBarModule } from 'projects/progress-bar/src/public-api';
import { ShoppingGridModule } from 'projects/shopping-grid/src/public-api';
import { BarchartModule } from 'projects/barchart/src/public-api';
import { PieChartModule } from 'projects/pie-chart/src/public-api';
import { LineChartModule } from 'projects/line-chart/src/public-api';
import { AreaChartModule } from 'projects/area-chart/src/public-api';
import { WeatherReportModule } from 'projects/weather-report/src/public-api';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DocComponent } from './doc/doc.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { PiecompComponent } from './piecomp/piecomp.component';
import { ProgressbarcompComponent } from './progressbarcomp/progressbarcomp.component';
import { CardlistcompComponent } from './cardlistcomp/cardlistcomp.component';
import { TablecompComponent } from './tablecomp/tablecomp.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { GridcompComponent } from './gridcomp/gridcomp.component';
import { WeatherReportcompComponent } from './weather-reportcomp/weather-reportcomp.component';
import { LinecompComponent } from './linecomp/linecomp.component';
import { BarcompComponent } from './barcomp/barcomp.component';
import { AreacompComponent } from './areacomp/areacomp.component';

@NgModule({
  declarations: [
    AppComponent,
    DocComponent,
    PiecompComponent,
    ProgressbarcompComponent,
    CardlistcompComponent,
    TablecompComponent,
    NavbarcompComponent,
    GridcompComponent,
    WeatherReportcompComponent,
    LinecompComponent,
    BarcompComponent,
    AreacompComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MyLibModule,
    BrowserAnimationsModule,
    CardListModule,
    ProductTableModule,
    NavbarModule,
    MenubarModule,
    ProgressBarModule,
    ShoppingGridModule,
    BarchartModule,
    PieChartModule,
    LineChartModule,
    AreaChartModule,
    WeatherReportModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
