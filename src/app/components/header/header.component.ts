import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1 class="header"
                [ngStyle]="{ 'color': rol === 'admin' ? 'green' : '' }"
              >
                Cabecera {{ this.rol === 'admin' ? this.rol : '' }}
              </h1>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() rol: string = 'admin';

  constructor() {
    console.log('HeaderComponent constructor');
  }
}
