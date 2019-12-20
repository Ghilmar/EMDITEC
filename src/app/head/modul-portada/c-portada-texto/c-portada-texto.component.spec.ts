import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPortadaTextoComponent } from './c-portada-texto.component';

describe('CPortadaTextoComponent', () => {
  let component: CPortadaTextoComponent;
  let fixture: ComponentFixture<CPortadaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPortadaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPortadaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
