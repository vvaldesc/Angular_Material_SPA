import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('https://dummyjson.com/users');
    //return this.http.get(environment.dummyUsers+'/users');
  }
}
