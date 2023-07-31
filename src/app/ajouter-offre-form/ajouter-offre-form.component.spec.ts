import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOffreFormComponent } from './ajouter-offre-form.component';

describe('AjouterOffreFormComponent', () => {
  let component: AjouterOffreFormComponent;
  let fixture: ComponentFixture<AjouterOffreFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterOffreFormComponent]
    });
    fixture = TestBed.createComponent(AjouterOffreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
