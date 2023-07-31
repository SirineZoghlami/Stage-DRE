import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjouterOffreFormComponent } from './ajouter-offre-form/ajouter-offre-form.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ajouter-offre', component: AjouterOffreFormComponent }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
