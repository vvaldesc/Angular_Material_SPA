import { Component, OnInit } from '@angular/core';
import products from '../../../assets/data/simProductos/productos';
import { ProductsService } from '../../services/products/products.service';

type Product = {
  image: string,
  name: string,
  description: string,
  unitAvailable: number,
  date: Date
  price: number,
  category: string,
};

@Component({
  selector: 'app-iterate-product-cards',
  templateUrl: './iterate-product-cards.component.html',
  styleUrl: './iterate-product-cards.component.css'
})
export class IterateProductCardsComponent implements OnInit{

  products: Product[] = []; // Array of products

  constructor(private productsService: ProductsService) {  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe((response: any) => {
        this.products = response.products;
        console.log('Servicio');
        console.log(this.products);
      });
  }
}



