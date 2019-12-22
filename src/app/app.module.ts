import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { PurchaseRouteComponent } from './purchase-route/purchase-route.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeRouteComponent, PurchaseRouteComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
})
export class AppModule {}
