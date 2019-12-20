import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPreuniversitariosPrincipalComponent } from './c-preuniversitarios-principal.component';

describe('CPreuniversitariosPrincipalComponent', () => {
  let component: CPreuniversitariosPrincipalComponent;
  let fixture: ComponentFixture<CPreuniversitariosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPreuniversitariosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPreuniversitariosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
