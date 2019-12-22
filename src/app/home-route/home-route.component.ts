import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-route',
  styleUrls: ['./home-route.component.scss'],
  templateUrl: './home-route.component.html',
})
export class HomeRouteComponent implements OnInit {
  public product: any = environment.product;

  constructor(protected router: Router) {}

  public ngOnInit(): void {}

  public onClickPurchase(): void {
    (window as any).fbq('track', 'InitiateCheckout', {
      currency: 'USD',
      value: 249.0,
    });

    this.router.navigateByUrl('purchase');

    // (window as any).fbq('track', 'Purchase', {
    //   value: 249.0,
    //   currency: 'USD',
    // });
  }
}
