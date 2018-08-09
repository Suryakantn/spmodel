import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SupplierproductComponent } from './supplierproduct/supplierproduct.component';
import { SupplierComponent } from './supplierproduct/supplier/supplier.component';
import { CredentialComponent } from './supplierproduct/credential/credential.component';
import { ProductComponent } from './supplierproduct/product/product.component';
const routes:Routes=[
  { path: '', component: SupplierproductComponent,
  children:[
    { path:'supplier',component: SupplierComponent},
    { path:'credential',component: CredentialComponent},
    { path:'product',component: ProductComponent},
  ]
},

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const RoutingComponent=[];