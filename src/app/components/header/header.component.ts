import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1
                [ngStyle]="{ 'color': rol === 'admin' ? 'green' : '' }"
              >
                Cabecera {{ this.rol === 'admin' ? this.rol : '' }}
              </h1>`,
  //templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() rol: string = 'admin';

  constructor() {
    console.log('HeaderComponent constructor');
  }

  ngOnInit() {
    // Add any initialization logic here
  }
}
