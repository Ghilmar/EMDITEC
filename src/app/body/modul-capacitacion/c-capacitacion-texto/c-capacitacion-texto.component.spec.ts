import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCapacitacionTextoComponent } from './c-capacitacion-texto.component';

describe('CCapacitacionTextoComponent', () => {
  let component: CCapacitacionTextoComponent;
  let fixture: ComponentFixture<CCapacitacionTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCapacitacionTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCapacitacionTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
