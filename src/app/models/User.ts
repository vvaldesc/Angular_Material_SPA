export interface User {
  completeName: string;
  username: string;
  ip: string;
  tlf: string;
  weight: number;
  address: Address;
}

interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}
