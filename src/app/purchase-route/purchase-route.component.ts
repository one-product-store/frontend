import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PayFastService } from '../core';

@Component({
  selector: 'app-purchase-route',
  styleUrls: ['./purchase-route.component.scss'],
  templateUrl: './purchase-route.component.html',
})
export class PurchaseRouteComponent implements OnInit {
  public formGroup: FormGroup = null;

  public product = environment.product;

  constructor(protected payFastService: PayFastService) {}

  public ngOnInit(): void {}

  public onClickContinueToPayment(): void {
    this.payFastService.redirectToPayment(this.product.description, this.product.name, this.product.price);
  }
}
