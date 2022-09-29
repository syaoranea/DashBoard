import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FormSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule
    ],
  exports: [
    FormSearchComponent
  ]
})
export class SharedModule { }
