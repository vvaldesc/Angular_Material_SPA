import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product , Products} from '../../interface/product.interface';



@Injectable({
  providedIn: `root`
})

export class ProductsService {
  private apiUrl = 'assets/data/jsonProductos/products.json';
  constructor(private http: HttpClient) {  }

  getProducts() {
    return this.http.get('assets/data/jsonProductos/products.json');
  }

  getProducts1():Observable<Products> {
    return this.http.get<Products>(`${this.apiUrl}`)
  }
}
