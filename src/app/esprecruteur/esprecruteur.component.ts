import { Component } from '@angular/core';

@Component({
  selector: 'app-esprecruteur',
  templateUrl: './esprecruteur.component.html',
  styleUrls: ['./esprecruteur.component.css']
})
export class EsprecruteurComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
