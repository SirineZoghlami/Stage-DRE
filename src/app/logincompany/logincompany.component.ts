import { Component } from '@angular/core';

@Component({
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.css']
})
export class LogincompanyComponent {
  showDiv1 = true;
  showDiv2 = false;

  toggleDivs() {
    this.showDiv1 = !this.showDiv1;
    this.showDiv2 = !this.showDiv2;
  }

}
