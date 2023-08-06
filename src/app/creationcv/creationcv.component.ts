import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-creationcv',
  templateUrl: './creationcv.component.html',
  styleUrls: ['./creationcv.component.css']
})
export class CreationcvComponent {
  formData = {
    name: '',
    email: ''
};
isDropdownOpen: boolean = false;

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}
onSubmit() {
  console.log(this.formData);
}}
