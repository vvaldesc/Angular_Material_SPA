import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { MaterialCustomModule } from '../material/material-custom-module/material-custom-module.module';

import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagerComponent } from './manager/manager.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductsService } from '../services/products/products.service';



@NgModule({
  declarations: [
    ProductsComponent,
    AboutUsComponent,
    NotFoundComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialCustomModule
  ],
  providers: [
    ProductsService
  ],
})
export class PagesModule { }
