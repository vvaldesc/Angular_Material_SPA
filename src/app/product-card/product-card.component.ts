import { Component, Input } from '@angular/core';

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
  /*@Input() id: number = 0;
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';*/

  @Input() product: Product = {
    id: 0,
    img: '',
    name: '',
    price: 0,
    description: ''
  };

  mostrarFormulario() {
    console.log('Mostrando formulario');
  }

  buyProduct = (name: string) => {
    console.log(ProductCardComponent.msg +' '+ name);
  }

  specialStyle = {
    color: 'red !important',
  };  
}
