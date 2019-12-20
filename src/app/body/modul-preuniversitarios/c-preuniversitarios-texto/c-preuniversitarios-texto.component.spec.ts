import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPreuniversitariosTextoComponent } from './c-preuniversitarios-texto.component';

describe('CPreuniversitariosTextoComponent', () => {
  let component: CPreuniversitariosTextoComponent;
  let fixture: ComponentFixture<CPreuniversitariosTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPreuniversitariosTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPreuniversitariosTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
