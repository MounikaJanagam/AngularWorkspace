import { Routes} from '@angular/router';
import { PieChartComponent } from 'projects/pie-chart/src/lib/pie-chart.component';
import { DocComponent } from '../doc/doc.component';
import { PiecompComponent } from '../piecomp/piecomp.component';
import { ProgressbarcompComponent } from '../progressbarcomp/progressbarcomp.component';
import { CardlistcompComponent } from '../cardlistcomp/cardlistcomp.component';
import { TablecompComponent } from '../tablecomp/tablecomp.component';
import { NavbarcompComponent } from '../navbarcomp/navbarcomp.component';
import { GridcompComponent } from '../gridcomp/gridcomp.component';
import { WeatherReportcompComponent } from '../weather-reportcomp/weather-reportcomp.component';
import { LinecompComponent } from '../linecomp/linecomp.component';
import { BarcompComponent } from '../barcomp/barcomp.component'
import { AreacompComponent } from '../areacomp/areacomp.component'

export const routes : Routes = [
    {path: 'piecomp',component:PiecompComponent},
    {path: 'progressbarcomp',component:ProgressbarcompComponent},
    {path: 'cardlistcomp',component:CardlistcompComponent},
    {path: 'tablecomp',component:TablecompComponent},
    {path: 'navbarcomp',component:NavbarcompComponent},
    {path: 'gridcomp',component:GridcompComponent},
    {path: 'weather-reportcomp',component:WeatherReportcompComponent},
    {path: 'linecomp',component:LinecompComponent},
    {path: 'barcomp',component:BarcompComponent},
    {path: 'areacomp',component:AreacompComponent},
    {path: '',redirectTo: '/doc',pathMatch:'full'}
];