import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CComunicadosTextoComponent } from './c-comunicados-texto.component';

describe('CComunicadosTextoComponent', () => {
  let component: CComunicadosTextoComponent;
  let fixture: ComponentFixture<CComunicadosTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CComunicadosTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CComunicadosTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
