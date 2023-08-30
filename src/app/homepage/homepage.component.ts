import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  options = [
    { id: 1, name: 'JAVA' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'PHP' },
    { id: 4, name: 'PYTHON' },
    { id: 5, name: 'ANGULAR' },
    { id: 6, name: 'JAVASCRIPT' },
    { id: 7, name: 'REACTJS' },
    { id: 8, name: 'C#' },
    { id: 9, name: 'C/C++' }
  ]
  selectedOptions: any[] = [];
  onContractSelect() {
    const selectElement = document.getElementById('typecontrat') as HTMLSelectElement;
    if (selectElement) {
      selectElement.classList.toggle('selected-option', selectElement.value !== '');
    }
  }


}
