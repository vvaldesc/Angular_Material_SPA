import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() disabled: boolean = false;
  @Input() func: Function = () => {};  
  @Input() id: string = '';

  handleClick(): void {
    if (!this.disabled && this.func) {
      this.func(this.id);
    }
  }
}

