import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasCiudadComponent } from './personas-ciudad.component';

describe('PersonasCiudadComponent', () => {
  let component: PersonasCiudadComponent;
  let fixture: ComponentFixture<PersonasCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
