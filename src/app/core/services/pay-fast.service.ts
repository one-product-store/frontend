import { Injectable } from '@angular/core';
import { RedirectHelper } from '../helpers';
import * as uuid from 'uuid';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PayFastService {
  constructor() {}

  public redirectToPayment(description: string, name: string, price: number): void {
    const params = {
      merchant_id: environment.production ? '11223714' : '10000100',
      merchant_key: environment.production ? 'ak5h6ln1aiwgi' : '46f0cd694581a',
      // return_url: environment.production ? `${window.location.origin}` : `https://example.com`,
      // cancel_url: environment.production ? `${window.location.origin}` : `https://example.com`,
      // notify_url: environment.production ? `${window.location.origin}` : `https://example.com`,
      m_payment_id: uuid.v4(),
      payment_method: 'cc',
      amount: price,
      item_name: name,
      item_description: description,
    };

    RedirectHelper.post(
      environment.production ? 'https://www.payfast.co.za/eng/process' : 'https://sandbox.payfast.co.za/eng/process',
      params,
    );
  }
}
