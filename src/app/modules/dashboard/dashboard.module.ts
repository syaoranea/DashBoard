import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard.component';
import { HeadingComponent } from './heading/heading.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DashboardComponent,
    HeadingComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent,
    HeadingComponent,
    MenuComponent,
  ]
})
export class DashboardModule { }
