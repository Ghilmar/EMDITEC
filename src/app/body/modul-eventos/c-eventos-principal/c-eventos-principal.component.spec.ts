import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEventosPrincipalComponent } from './c-eventos-principal.component';

describe('CEventosPrincipalComponent', () => {
  let component: CEventosPrincipalComponent;
  let fixture: ComponentFixture<CEventosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEventosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEventosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
