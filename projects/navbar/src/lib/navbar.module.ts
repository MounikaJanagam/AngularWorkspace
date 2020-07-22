import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
// For MDB Angular Free


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
