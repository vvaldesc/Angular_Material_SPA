import { Component, Input } from '@angular/core';

type Product = {
  id: number,
  img: string,
  name: string,
  price: number,
  description: string,
  fecha: Date
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {

  @Input() product: Product = {
    id: 0,
    img: '',
    name: '',
    price: 0,
    description: '',
    fecha: new Date()
  };

  mostrarFormulario() {
    console.log('Mostrando formulario');
  }

  specialStyle = {
    color: 'red !important',
  };  
}
