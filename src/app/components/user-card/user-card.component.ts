import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = 'Jhon'
  lastName = 'Doe'
  age = 30
  address = {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
}
