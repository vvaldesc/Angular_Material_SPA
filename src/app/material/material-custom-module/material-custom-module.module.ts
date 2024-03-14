import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialProductsTableComponent } from './material-products-table/material-products-table.component';
import { MaterialSesionFormComponent } from './material-sesion-form/material-sesion-form.component';



@NgModule({
  declarations: [
    MaterialProductsTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialSesionFormComponent 
  ],
  exports: [
    MaterialProductsTableComponent,
    MaterialSesionFormComponent
  ]
})
export class MaterialCustomModule { }
