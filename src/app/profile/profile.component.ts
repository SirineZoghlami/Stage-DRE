import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
/*import { MesCandidaturesComponent } from '../mes-candidatures/mes-candidatures.component';*/

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('slideDown', [
      state('void', style({ height: '0', opacity: '0' })),
      state('*', style({ height: '*', opacity: '1' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ProfileComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
/*******************thabetk llmodifier ****************************/
  showModifProfile = false;

  toggleModifProfile() {
    this.showModifProfile = !this.showModifProfile;
  }

  scrollToModifProfile() {
    const modifProfileSection = document.getElementById('modifProfileSection');
    if (modifProfileSection) {
      modifProfileSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  /****************************ytalaa lfouq**************************/


  scrollup() {
    const up = document.getElementById('interface1');
    if (up) {
      this.showModifProfile = !this.showModifProfile;
      up.scrollIntoView({ behavior: 'smooth' });
    }
  }

  importCV() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf';
    fileInput.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target && target.files && target.files.length > 0) {
        const selectedFile = target.files[0];
        if (selectedFile.type === 'application/pdf') {
          // Here, you can perform actions with the selected PDF file.
          // For example, you can upload it to a server or process it locally.
          console.log('Selected PDF file:', selectedFile);
        } else {
          console.log('Please select a valid PDF file.');
        }
      }
    });

    // Trigger the file input click event
    fileInput.click();
  }
  

}
