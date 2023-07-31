import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureOffreEmploisFormComponent } from './candidature-offre-emplois-form.component';

describe('CandidatureOffreEmploisFormComponent', () => {
  let component: CandidatureOffreEmploisFormComponent;
  let fixture: ComponentFixture<CandidatureOffreEmploisFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatureOffreEmploisFormComponent]
    });
    fixture = TestBed.createComponent(CandidatureOffreEmploisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
