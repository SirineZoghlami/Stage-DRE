import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
  jobTitles = [
    'Développeur web',
    'Développeur informatique',
    'Technicien',
  ];
  domaines=[
    'informatique',
    'mecanique'
  ];

  selected!: string;
  selecteddomaine!: string
  getSelectedValue(){
    console.log(this.selected);
  }
}
