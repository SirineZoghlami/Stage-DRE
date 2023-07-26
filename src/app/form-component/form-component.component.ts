import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  formData = {
    name: '',
    email: ''
  };

  onSubmit() {
    // Here, you can perform any logic with the form data.
    // For now, let's just log the form data to the console.
    console.log(this.formData);
  }
}

