import { Component } from '@angular/core';

@Component({
  selector: 'app-signupcompany',
  templateUrl: './signupcompany.component.html',
  styleUrls: ['./signupcompany.component.css']
})
export class SignupcompanyComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
