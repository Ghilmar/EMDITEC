import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSecundariosPrincipalComponent } from './c-secundarios-principal.component';

describe('CSecundariosPrincipalComponent', () => {
  let component: CSecundariosPrincipalComponent;
  let fixture: ComponentFixture<CSecundariosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSecundariosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSecundariosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
