import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarPersonaComponent } from './solicitar-persona.component';

describe('SolicitarPersonaComponent', () => {
  let component: SolicitarPersonaComponent;
  let fixture: ComponentFixture<SolicitarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
