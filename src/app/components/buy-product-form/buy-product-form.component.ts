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
  selector: 'app-buy-product-form',
  templateUrl: './buy-product-form.component.html',
  styleUrl: './buy-product-form.component.css'
})
export class BuyProductFormComponent {
  static msg: string = 'Comprando';
  static msgMostrarForm: string = 'Mostrando datos del producto';

  @Input() agotado: boolean = false;
  @Input() product: Product = {
    image: '',
    name: '',
    description: '',
    unitAvailable: 0,
    date: new Date(),
    price: 0,
    category: '',
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
