import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fix: Updated styleUrl to styleUrls
})
export class HeaderComponent{
  constructor() {
    console.log('HeaderComponent constructor');
  }
}
