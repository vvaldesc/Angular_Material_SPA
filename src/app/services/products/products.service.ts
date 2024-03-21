import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {  }

  getProducts() {
    //return this.http.get('assets/data/jsonProductos/products.json');
    return this.http.get(environment.localProducts);
  }
}
