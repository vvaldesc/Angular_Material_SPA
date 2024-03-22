import {Component,OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {UsersService} from '../../../services/users/users.service';

interface User {
  completeName: string;
  username: string;
  ip: string;
  tlf: string;
  weight: number;
  address: Address;
}

interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-material-products-table',
  templateUrl: './material-products-table.component.html',
  styleUrl: './material-products-table.component.css',
  standalone: true,
  imports: [MatTableModule],
})
export class MaterialProductsTableComponent {

  ELEMENT_DATA: User[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      console.log("////////////////////////////////////////");
      if (data && 'users' in data) {
        (data as { users: any[] }).users.map((user: any) => {
          this.ELEMENT_DATA.push({
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
          console.log(user)
        });
      } else {
        console.error('No se encontró el campo "users" en los datos devueltos.');
      }
    }); 

  }

  displayedColumns: string[] = ['completeName', 'username', 'ip', 'tlf','weight','address','city','postalCode','state'];
  //displayedColumns: string[] = [ 'ip'];
  dataSource = this.ELEMENT_DATA;
}
