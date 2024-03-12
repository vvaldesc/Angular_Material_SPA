import { Component, Input } from '@angular/core';
type Product = {
  id: number,
  img: string,
  name: string,
  price: number,
  description: string
}
@Component({
  selector: 'app-buy-product-form',
  templateUrl: './buy-product-form.component.html',
  styleUrl: './buy-product-form.component.css'
})
export class BuyProductFormComponent {
  static msg: string = 'Comprando';
  static msgMostrarForm: string = 'Mostrando datos del producto';

  @Input() product: Product = {
    id: 0,
    img: '',
    name: '',
    price: 0,
    description: ''
  };
  
  formState: boolean = false
  postalCode: string = '';
  address: string = '';

  toogleForm = () => {
    console.log(BuyProductFormComponent.msgMostrarForm);
    this.formState = !this.formState;
  }

  returnPost = () => {
    console.log('Se va a enviar a calle: '+this.address+'y CP: '+this.postalCode);
  }

  buyProduct = (name: string) => {
    console.log(BuyProductFormComponent.msg +' '+ name);
  }
}
