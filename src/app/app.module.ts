import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CandidatureOffreEmploisFormComponent } from './candidature-offre-emplois-form/candidature-offre-emplois-form.component';
import { AjouterOffreFormComponent } from './ajouter-offre-form/ajouter-offre-form.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CandidatureOffreEmploisFormComponent,
    AjouterOffreFormComponent,
    ProfilePageComponent,
    EditProfileFormComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Add the AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

