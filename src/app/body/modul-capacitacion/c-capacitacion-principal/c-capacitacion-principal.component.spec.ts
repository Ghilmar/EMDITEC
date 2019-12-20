import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCapacitacionPrincipalComponent } from './c-capacitacion-principal.component';

describe('CCapacitacionPrincipalComponent', () => {
  let component: CCapacitacionPrincipalComponent;
  let fixture: ComponentFixture<CCapacitacionPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCapacitacionPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCapacitacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
