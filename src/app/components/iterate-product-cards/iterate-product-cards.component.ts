import { Component, OnInit } from '@angular/core';
import products from '../../../assets/data/simProductos/productos';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../models/Product';

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
      });
  }
}



