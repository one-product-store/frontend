export interface IPurchase {
  userInformation: {
    emailAddress: string;
  };
  shippingInformation: {
    address: {
      city: string;
      country: string;
      region: string;
      street: string;
      zipCode: string;
    };
    mobile: string;
    name: string;
  };
}
