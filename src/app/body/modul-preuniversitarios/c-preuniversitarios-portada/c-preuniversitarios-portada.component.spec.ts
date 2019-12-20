import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPreuniversitariosPortadaComponent } from './c-preuniversitarios-portada.component';

describe('CPreuniversitariosPortadaComponent', () => {
  let component: CPreuniversitariosPortadaComponent;
  let fixture: ComponentFixture<CPreuniversitariosPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPreuniversitariosPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPreuniversitariosPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
