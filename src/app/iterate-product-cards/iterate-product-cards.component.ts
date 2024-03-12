import { Component } from '@angular/core';
import products from './data/productos.js';
type Product = {
  id: number,
  img: string,
  name: string,
  price: number,
  description: string
}


@Component({
  selector: 'app-iterate-product-cards',
  templateUrl: './iterate-product-cards.component.html',
  styleUrl: './iterate-product-cards.component.css'
})
export class IterateProductCardsComponent {
  products: Product[] = products;
}
