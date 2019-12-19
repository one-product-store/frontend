export class RedirectHelper {
  public static post(url: string, params: any): void {
    const form: HTMLFormElement = document.createElement('form');

    form.setAttribute('method', 'post');
    form.setAttribute('action', url);

    for (const key of Object.keys(params)) {
      if (params[key] !== null && params[key] !== undefined) {
        const hiddenInputElement: HTMLElement = document.createElement('input');

        hiddenInputElement.setAttribute('type', 'hidden');
        hiddenInputElement.setAttribute('name', key);
        hiddenInputElement.setAttribute('value', params[key]);

        form.appendChild(hiddenInputElement);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }
}
