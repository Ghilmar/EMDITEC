import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEventosMostrarEventosComponent } from './c-eventos-mostrar-eventos.component';

describe('CEventosMostrarEventosComponent', () => {
  let component: CEventosMostrarEventosComponent;
  let fixture: ComponentFixture<CEventosMostrarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEventosMostrarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEventosMostrarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
