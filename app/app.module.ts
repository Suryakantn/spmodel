import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SupplierproductComponent } from './supplierproduct/supplierproduct.component';
import { SupplierComponent } from './supplierproduct/supplier/supplier.component';
import { ProductComponent } from './supplierproduct/product/product.component';
import { CredentialComponent } from './supplierproduct/credential/credential.component';
import { AppRoutingModule, RoutingComponent } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SupplierproductComponent,
    SupplierComponent,
    ProductComponent,
    CredentialComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
