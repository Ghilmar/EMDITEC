import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCapacitacionPresentacionDelCursosComponent } from './c-capacitacion-presentacion-del-cursos.component';

describe('CCapacitacionPresentacionDelCursosComponent', () => {
  let component: CCapacitacionPresentacionDelCursosComponent;
  let fixture: ComponentFixture<CCapacitacionPresentacionDelCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCapacitacionPresentacionDelCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCapacitacionPresentacionDelCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
