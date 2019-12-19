import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductRouteComponent } from './product-route/product-route.component';

@NgModule({
  declarations: [AppComponent, ProductRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        component: ProductRouteComponent,
        path: '',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
