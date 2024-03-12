import { Component, Input } from '@angular/core';

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
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {

  @Input() product: Product = {
    image: '',
    name: '',
    description: '',
    unitAvailable: 0,
    date: new Date(),
    price: 0,
    category: '',
  };

  mostrarFormulario(): void {
    console.log('Mostrando formulario');
  }

  specialStyle: any = {
    color: 'red'
  };  
}
