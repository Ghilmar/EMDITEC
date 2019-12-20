import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CConsultoriaPortadaComponent } from './c-consultoria-portada.component';

describe('CConsultoriaPortadaComponent', () => {
  let component: CConsultoriaPortadaComponent;
  let fixture: ComponentFixture<CConsultoriaPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConsultoriaPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CConsultoriaPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
