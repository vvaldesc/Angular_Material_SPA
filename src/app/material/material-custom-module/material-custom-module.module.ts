import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialProductsTableComponent } from './material-products-table/material-products-table.component';
import { MaterialSesionFormComponent } from './material-sesion-form/material-sesion-form.component';
import { MaterialPostProductComponent } from './material-post-product/material-post-product.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialSesionFormComponent,
    MaterialProductsTableComponent,
    MaterialPostProductComponent
  ],
  exports: [
    MaterialProductsTableComponent,
    MaterialSesionFormComponent,
    MaterialPostProductComponent
  ]
})

export class MaterialCustomModule { }
