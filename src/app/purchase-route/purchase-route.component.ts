import { Component, OnInit } from '@angular/core';
import { PayFastService } from '../core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-purchase-route',
  templateUrl: './purchase-route.component.html',
  styleUrls: ['./purchase-route.component.scss'],
})
export class PurchaseRouteComponent implements OnInit {
  public product = environment.product;

  constructor(protected payFastService: PayFastService) {}

  public ngOnInit(): void {}

  public onClickContinueToPayment(): void {
    this.payFastService.redirectToPayment(this.product.description, this.product.name, this.product.price);
  }
}
