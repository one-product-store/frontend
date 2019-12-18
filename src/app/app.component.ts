import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public description =
    'Thermoglasses are elegant and stylish all the while being practical and easy to use. The beautiful and timeless shapes in transparent glass allow you to appreciate the rich colours of your drink while the delicate mouth-blown designs add a modern lightweight feel.';

  public image = 'https://media.takealot.com/covers_tsins/45788509/45788509-pdpxl.jpg';

  public name = 'Double Walled Tall Glass Tumbler 300ml - Set of 2';

  public price = 14.46;

  public title = 'storeb';

  public onClickBuyNow(): void {
    this.post('https://sandbox.2checkout.com/checkout/purchase', {
      sid: '901417146',
      mode: '2CO',
      li_1_type: 'product',
      li_1_name: this.name,
      li_1_quantity: 1,
      li_1_price: this.price,
      li_1_tangible: 'Y',
    });
  }

  public post(url: string, params: any): void {
    const form: HTMLFormElement = document.createElement('form');

    form.setAttribute('method', 'post');
    form.setAttribute('action', url);

    for (const key of Object.keys(params)) {
      const hiddenInputElement: HTMLElement = document.createElement('input');

      hiddenInputElement.setAttribute('type', 'hidden');
      hiddenInputElement.setAttribute('name', key);
      hiddenInputElement.setAttribute('value', params[key]);

      form.appendChild(hiddenInputElement);
    }

    document.body.appendChild(form);
    form.submit();
  }
}
