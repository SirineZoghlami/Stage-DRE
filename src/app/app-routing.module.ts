import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent  } from './form/form.component';
import { SignupComponent  } from './signup/signup.component';
import { LoginpageComponent  } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LogincompanyComponent } from './logincompany/logincompany.component';
import { CreationcvComponent } from './creationcv/creationcv.component';
import { EsprecruteurComponent } from './esprecruteur/esprecruteur.component';
import { SignupcompanyComponent } from './signupcompany/signupcompany.component';
import { OffreComponent } from './offre/offre.component';
const routes: Routes = [
  {path: '', component: FormComponent  }, // Default route

 {path:'sui', component : SignupComponent },
 {path:'Signupcompany', component : SignupcompanyComponent},
 {path:'loginpage', component : LoginpageComponent },
 {path:'welcomepage', component : WelcomepageComponent  },
 {path:'logincompany', component : LogincompanyComponent   },
 {path:'pagecv', component : CreationcvComponent    },
 {path:'espacerecruteur', component :EsprecruteurComponent    },
 {path:'offre', component :OffreComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
