   export interface Product {
      image: string;
      name: string;
      description: string;
      unitAvailable: number;
      date: Date;
      price: number;
      category: string;
   }

   export interface Products {
      products: Product[];
   }