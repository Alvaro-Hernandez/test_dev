import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComunicacionCComponent } from './comunicacion-c/comunicacion-c.component';


@NgModule({
  declarations: [
    ComunicacionCComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ComunicacionModule { }
