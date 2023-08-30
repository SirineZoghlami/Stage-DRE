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
  selectedOptions: any[] = [];
  options = [
    { id: 1, name: 'JAVA' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'PHP' },
    { id: 4, name: 'PYTHON' },
    { id: 5, name: 'ANGULAR' },
    { id: 6, name: 'JAVASCRIPT' },
    { id: 7, name: 'REACTJS' },
    { id: 8, name: 'C#' },
    { id: 9, name: 'C/C++' }]

}
