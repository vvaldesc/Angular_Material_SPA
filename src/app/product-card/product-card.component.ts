import { Component } from '@angular/core';

type Product = {
  id: number,
  img: string,
  name: string,
  price: number,
  description: string
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {

  static msg: string = 'Añadiendo al carrito';

  product = {
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  } as Product;

  product_2 = {
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Phone XL',
    price: 0,
    description: 'A large phone with one of the best screens'
  } as Product;

  buyProduct : Function = (name: string) => {
    console.log(ProductCardComponent.msg +' '+ name);
  }

  specialStyle = {
    color: 'red !important',
  };  
}
