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
    { id: 9, name: 'C/C++' },
    { id: 10, name: 'Design Graphique' },
    { id: 11, name: 'Travail en équipe' },
    { id: 12, name: 'Responsable' },
    { id: 13, name: 'Négociation' },
    { id: 14, name: 'Gestion de projet' },
    { id: 15, name: 'Machine learning' },
    { id: 16, name: 'Gestion d\'équipe' },
    { id: 17, name: 'Data science' },
    { id: 18, name: 'Adobe Photoshop' },
    { id: 19, name: 'Finance' },
    { id: 20, name: 'Mécanique' },
    { id: 21, name: 'Électronique' },
    { id: 22, name: 'Mécatronique' },
    { id: 23, name: 'Marketing digital' },
    { id: 24, name: 'Symfony' },
    { id: 25, name: 'Math skills' }

  ]
  calculateHeight() {
    return `${40 + this.selectedOptions.length * 40}px`; // Adjust the values as needed
  }
}
