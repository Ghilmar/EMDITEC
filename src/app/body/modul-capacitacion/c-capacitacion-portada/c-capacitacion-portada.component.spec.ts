import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCapacitacionPortadaComponent } from './c-capacitacion-portada.component';

describe('CCapacitacionPortadaComponent', () => {
  let component: CCapacitacionPortadaComponent;
  let fixture: ComponentFixture<CCapacitacionPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCapacitacionPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCapacitacionPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
