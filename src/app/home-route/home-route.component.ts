import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss'],
})
export class HomeRouteComponent implements OnInit {
  constructor(protected router: Router) {}

  public ngOnInit(): void {}

  public onClickPurchase(): void {
    (window as any).fbq('track', 'InitiateCheckout', {
      value: 249.0,
      currency: 'USD',
    });

    this.router.navigateByUrl('purchase');

    // (window as any).fbq('track', 'Purchase', {
    //   value: 249.0,
    //   currency: 'USD',
    // });
  }
}
