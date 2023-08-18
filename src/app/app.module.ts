import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LogincompanyComponent } from './logincompany/logincompany.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CreationcvComponent } from './creationcv/creationcv.component';
import { EsprecruteurComponent } from './esprecruteur/esprecruteur.component';
import { OffreComponent } from './offre/offre.component';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilentrepriseComponent } from './acceuilentreprise/acceuilentreprise.component';
import { TestComponent } from './test/test.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AjouteroffreComponent } from './ajouteroffre/ajouteroffre.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginpageComponent,
    WelcomepageComponent,
    LogincompanyComponent,
    CreationcvComponent,
    EsprecruteurComponent,
    OffreComponent,
    HomepageComponent,
    ProfileComponent,
    AcceuilentrepriseComponent,
    TestComponent,
    ContactusComponent,
    AjouteroffreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }