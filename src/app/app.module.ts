import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductRouteComponent } from './product-route/product-route.component';
import { PurchaseRouteComponent } from './purchase-route/purchase-route.component';

@NgModule({
  declarations: [AppComponent, ProductRouteComponent, PurchaseRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        component: ProductRouteComponent,
        path: '',
      },
      {
        component: PurchaseRouteComponent,
        path: 'purchase',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
