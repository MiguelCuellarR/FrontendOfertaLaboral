import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasEmpresaComponent } from './personas-empresa.component';

describe('PersonasEmpresaComponent', () => {
  let component: PersonasEmpresaComponent;
  let fixture: ComponentFixture<PersonasEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
