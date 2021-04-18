import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaMasSolicitadaComponent } from './persona-mas-solicitada.component';

describe('PersonaMasSolicitadaComponent', () => {
  let component: PersonaMasSolicitadaComponent;
  let fixture: ComponentFixture<PersonaMasSolicitadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaMasSolicitadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaMasSolicitadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
