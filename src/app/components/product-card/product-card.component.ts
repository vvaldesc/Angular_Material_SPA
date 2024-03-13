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
  } as Product;

  agotado: boolean = true;
  pocoStock: boolean = false;
  caro: boolean = false;

  mostrarFormulario(): void {
    console.log('Mostrando formulario');
  }

  specialStyle: any = {
    color: 'red'
  };  

  ngOnInit(): void {
    this.agotado = this.product.unitAvailable == 0;
    this.pocoStock = this.product.unitAvailable < 10;
    this.caro = this.product.price > 500;

    console.log(this);
    console.log(this.product.unitAvailable+' '+this.agotado);
    console.log(this.pocoStock);
    console.log(this.caro);
  }
}
