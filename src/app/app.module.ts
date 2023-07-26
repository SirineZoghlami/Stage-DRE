import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component'; // Import the form component
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module'; // If you have a separate routing module



@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
   // NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
