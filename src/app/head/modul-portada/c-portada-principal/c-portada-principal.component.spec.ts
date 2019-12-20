import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPortadaPrincipalComponent } from './c-portada-principal.component';

describe('CPortadaPrincipalComponent', () => {
  let component: CPortadaPrincipalComponent;
  let fixture: ComponentFixture<CPortadaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPortadaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPortadaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
