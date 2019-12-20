import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSoftwarePrincipalComponent } from './c-software-principal.component';

describe('CSoftwarePrincipalComponent', () => {
  let component: CSoftwarePrincipalComponent;
  let fixture: ComponentFixture<CSoftwarePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSoftwarePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSoftwarePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
