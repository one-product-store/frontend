import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PayFastService } from '../core';

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
    this.payFastService.redirectToPayment(this.product.description, null, this.product.name, this.product.price);
  }
}
