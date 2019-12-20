import { Component, OnInit } from '@angular/core';
import { PayFastService } from '../core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-route',
  templateUrl: './product-route.component.html',
  styleUrls: ['./product-route.component.scss'],
})
export class ProductRouteComponent implements OnInit {
  public product = environment.product;

  constructor(protected payFastService: PayFastService, protected router: Router) {}

  public ngOnInit(): void {}

  public onClickPurchase(): void {
    this.router.navigateByUrl('purchase');
  }
}
