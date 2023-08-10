import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-acceuilentreprise',
  templateUrl: './acceuilentreprise.component.html',
  styleUrls: ['./acceuilentreprise.component.css'],

animations: [
  trigger('slideDown', [
    state('void', style({ height: '0', opacity: '0' })),
    state('*', style({ height: '*', opacity: '1' })),
    transition('void <=> *', animate('300ms ease-in-out')),
  ]),
],
})
export class AcceuilentrepriseComponent implements OnInit{

  showSlide = true;
  ngOnInit(): void {}
  toggleSlide() {
    this.showSlide = !this.showSlide;
  }
  
  
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  showModifProfile = false;

  toggleModifProfile() {
    this.showModifProfile = !this.showModifProfile;
  }

}
