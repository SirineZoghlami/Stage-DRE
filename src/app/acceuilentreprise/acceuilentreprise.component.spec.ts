import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilentrepriseComponent } from './acceuilentreprise.component';

describe('AcceuilentrepriseComponent', () => {
  let component: AcceuilentrepriseComponent;
  let fixture: ComponentFixture<AcceuilentrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilentrepriseComponent]
    });
    fixture = TestBed.createComponent(AcceuilentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
