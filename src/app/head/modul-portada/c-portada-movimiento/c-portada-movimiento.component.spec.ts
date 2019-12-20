import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPortadaMovimientoComponent } from './c-portada-movimiento.component';

describe('CPortadaMovimientoComponent', () => {
  let component: CPortadaMovimientoComponent;
  let fixture: ComponentFixture<CPortadaMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPortadaMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPortadaMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
