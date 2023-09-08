import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent  } from './form/form.component';
import { LoginpageComponent  } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LogincompanyComponent } from './logincompany/logincompany.component';
import { CreationcvComponent } from './creationcv/creationcv.component';
import { EsprecruteurComponent } from './esprecruteur/esprecruteur.component';
import { OffreComponent } from './offre/offre.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilentrepriseComponent } from './acceuilentreprise/acceuilentreprise.component';

import { ContactusComponent } from './contactus/contactus.component';
import { AjouteroffreComponent } from './ajouteroffre/ajouteroffre.component';
import { MesCandidaturesComponent } from './mes-candidatures/mes-candidatures.component'; 


const routes: Routes = [
  {path:'', component : WelcomepageComponent  },

{path: 'form', component: FormComponent  },
 {path:'loginpage', component : LoginpageComponent },
 {path:'welcomepage', component : WelcomepageComponent  },
 {path:'logincompany', component : LogincompanyComponent   },
 {path:'pagecv', component : CreationcvComponent    },
 {path:'espacerecruteur', component :EsprecruteurComponent    },
 {path:'offre', component :OffreComponent  },
 {path:'home', component :HomepageComponent  },
 {path:'profile', component :ProfileComponent },
 {path:'entreprise', component :AcceuilentrepriseComponent},
 {path:'contactus', component : ContactusComponent  },
 {path:'ajouteoffre', component :AjouteroffreComponent   },
 { path: 'mes-candidatures', component: MesCandidaturesComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
