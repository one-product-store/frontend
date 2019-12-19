export interface IPurchase {
  name: string;

  price: number;

  shippingInformation: {
    name: string;
    mobile: string;
    address: {
      street: string;
      country: string;
      region: string;
      city: string;
      zipCode: string;
    };
  };
}
