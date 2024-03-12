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
      });
  }
}

function createArray(receivedProductsJson: string): Product[] {
  const parsedJson = JSON.parse(receivedProductsJson);
  const productsArray = parsedJson.products.map((product: any) => ({
    img: product.image,
    name: product.name,
    description: product.description,
    unitAvailable: parseInt(product.unitAvailable),
    fecha: new Date(product.date),
    price: parseFloat(product.price),
    category: product.category || 'N/A' // Si no hay una categoría, establece un valor por defecto
  }));
  return productsArray;
}



