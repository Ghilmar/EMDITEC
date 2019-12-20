import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CConsultoriaTextoComponent } from './c-consultoria-texto.component';

describe('CConsultoriaTextoComponent', () => {
  let component: CConsultoriaTextoComponent;
  let fixture: ComponentFixture<CConsultoriaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConsultoriaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CConsultoriaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
