import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNosotrosPrincipalComponent } from './c-nosotros-principal.component';

describe('CNosotrosPrincipalComponent', () => {
  let component: CNosotrosPrincipalComponent;
  let fixture: ComponentFixture<CNosotrosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNosotrosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNosotrosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
