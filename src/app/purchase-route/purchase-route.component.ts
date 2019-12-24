import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PayFastService, RedirectHelper } from '../core';

@Component({
  selector: 'app-purchase-route',
  styleUrls: ['./purchase-route.component.scss'],
  templateUrl: './purchase-route.component.html',
})
export class PurchaseRouteComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    emailAddress: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
  });

  public product = environment.product;

  constructor(protected payFastService: PayFastService) {}

  public ngOnInit(): void {}

  public onClickContinueToPayment(): void {
    // this.payFastService.redirectToPayment(this.product.description, null, this.product.name, this.product.price);

    RedirectHelper.post('https://sandbox.2checkout.com/checkout/purchase', {
      sid: '901417146',
      mode: '2CO',
      li_1_type: 'product',
      li_1_name: this.product.name,
      li_1_quantity: 1,
      li_1_price: this.product.price,
      li_1_tangible: 'Y',
    });
  }
}
