import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    email: ''
  };

  onSubmit() {
    // Here, you can perform any logic with the form data.
    // For now, let's just log the form data to the console.
    console.log(this.formData);
  }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
