import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard.component';
import { HeadingComponent } from './heading/heading.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HeadingComponent,
    MenuComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    HeadingComponent,
    MenuComponent,
  ]
})
export class DashboardModule { }
