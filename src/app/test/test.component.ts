import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  showDiv1 = true;

  toggleDivs() {
    this.showDiv1 = !this.showDiv1;
  }

}
