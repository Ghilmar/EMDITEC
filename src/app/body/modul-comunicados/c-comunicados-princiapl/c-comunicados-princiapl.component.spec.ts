import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CComunicadosPrinciaplComponent } from './c-comunicados-princiapl.component';

describe('CComunicadosPrinciaplComponent', () => {
  let component: CComunicadosPrinciaplComponent;
  let fixture: ComponentFixture<CComunicadosPrinciaplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CComunicadosPrinciaplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CComunicadosPrinciaplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
