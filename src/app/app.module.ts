import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PurchaseRouteComponent } from './purchase-route/purchase-route.component';
import { HomeRouteComponent } from './home-route/home-route.component';

@NgModule({
  declarations: [AppComponent, HomeRouteComponent, PurchaseRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        component: HomeRouteComponent,
        path: '',
      },
      {
        component: HomeRouteComponent,
        path: 'home',
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
