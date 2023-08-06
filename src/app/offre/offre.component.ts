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
    'Développeur full-stack',
    'Manager',
    'Agent commercial',
    'Designer graphique',
    'Data scientist',
    'Téléconseiller',
    'Ingénieur de développement informatique',
    'Community manager',
    'Gestionnaire administratif',
    'Responsable commercial',
    'Assistant / Assistante de direction',
    'Technicien informatique',
    'Développeur web mobile',
    'Data analyst',
    'Technicien support technique',
    'Responsable marketing',
    'Gestionnaire comptable',
    'Web designer',
    'Technicien ingénierie réseaux de télécoms',
    "Développeur d'application",
    'Testeur informatique',
    'Assistant / Assistante comptable',
    'Ingénieur réseaux télécoms',
    "Ingénieur d'essais en études,recherche et développement",
    'Administrateur système informatique',
    
    'Technicien réseau informatique',
    'Assistant commercial / Assistante commerciale',
    'Responsable informatique',
    "Consultant en système d'information",
    "Analyste financier / financière",
    'Chef de projet étude et développement informatique',
  ];
  domaines=[
    'Informatique',
    'Mécanique',
    'Electonique',
    'Bussiness',
    'Télécomunication'
  ];

  selected!: string;
  selecteddomaine!: string
  getSelectedValue(){
    console.log(this.selected);
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
}
