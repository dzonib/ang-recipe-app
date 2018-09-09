import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() navHandler = new EventEmitter<string>();


  onSelect(value) {
    this.navHandler.emit(value);
  }
}
