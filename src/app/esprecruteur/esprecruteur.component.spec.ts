import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsprecruteurComponent } from './esprecruteur.component';

describe('EsprecruteurComponent', () => {
  let component: EsprecruteurComponent;
  let fixture: ComponentFixture<EsprecruteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsprecruteurComponent]
    });
    fixture = TestBed.createComponent(EsprecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
