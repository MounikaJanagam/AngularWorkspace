import { NgModule } from '@angular/core';
import { MenubarComponent } from './menubar.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [MenubarComponent],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    
  ],
  exports: [MenubarComponent]
})
export class MenubarModule { }
