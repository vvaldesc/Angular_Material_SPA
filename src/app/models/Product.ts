export interface Product {
  [key: string]: string | number | Date;
  image: string;
  name: string;
  description: string;
  unitAvailable: number;
  date: Date;
  price: number;
  category: string;
}
