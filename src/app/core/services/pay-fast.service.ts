import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RedirectHelper } from '../helpers';

@Injectable({
  providedIn: 'root',
})
export class PayFastService {
  constructor() {}

  public redirectToPayment(description: string, emailAddress: string, name: string, price: number): void {
    const params = {
      amount: price,
      email_address: emailAddress,
      item_description: description,
      item_name: name,
      merchant_id: environment.production ? '11223714' : '10000100',
      merchant_key: environment.production ? 'ak5h6ln1aiwgi' : '46f0cd694581a',
      payment_method: 'cc',
      // return_url: environment.production ? `${window.location.origin}` : `https://example.com`,
      // cancel_url: environment.production ? `${window.location.origin}` : `https://example.com`,
      // notify_url: environment.production ? `${window.location.origin}` : `https://example.com`,
    };

    RedirectHelper.post(
      environment.production ? 'https://www.payfast.co.za/eng/process' : 'https://sandbox.payfast.co.za/eng/process',
      params,
    );
  }
}
