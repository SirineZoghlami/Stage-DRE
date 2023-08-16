import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  showDiv1 = true;
  showDiv2 = false;

  toggleDivs() {
    this.showDiv1 = !this.showDiv1;
    this.showDiv2 = !this.showDiv2;
  }


}
