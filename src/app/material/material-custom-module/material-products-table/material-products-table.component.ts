import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../models/User';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-material-products-table',
  templateUrl: './material-products-table.component.html',
  styleUrls: ['./material-products-table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class MaterialProductsTableComponent implements OnInit {

  ELEMENT_DATA = new BehaviorSubject<User[]>([]);
  dataSource = this.ELEMENT_DATA.asObservable();
  displayedColumns: string[] = ['completeName', 'username', 'ip', 'tlf', 'weight', 'address', 'city', 'postalCode', 'state'];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      if (data && 'users' in data) {
        const newData: User[] = []; // Array<User>
        (data as { users: any[] }).users.map((user: any) => {
          newData.push({
            completeName: user.firstname + ' ' + user.lastname,
            username: user.username,
            ip: user.ip,
            tlf: user.phone,
            weight: user.weight,
            address: {
              address: user.address.address,
              city: user.address.city,
              postalCode: user.address.postalCode,
              state: user.address.state,
            },
          });
        });
        this.ELEMENT_DATA.next(newData); //uso next para actualizar el valor del observable
      } else {
        console.error('No se encontró el campo "users" en los datos devueltos.');
      }
    });
  }
}