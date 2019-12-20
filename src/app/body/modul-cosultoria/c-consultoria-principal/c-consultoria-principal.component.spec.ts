import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CConsultoriaPrincipalComponent } from './c-consultoria-principal.component';

describe('CConsultoriaPrincipalComponent', () => {
  let component: CConsultoriaPrincipalComponent;
  let fixture: ComponentFixture<CConsultoriaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConsultoriaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CConsultoriaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
