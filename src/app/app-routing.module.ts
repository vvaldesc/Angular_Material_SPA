import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ManagerComponent } from './pages/manager/manager.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: ProductsComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
