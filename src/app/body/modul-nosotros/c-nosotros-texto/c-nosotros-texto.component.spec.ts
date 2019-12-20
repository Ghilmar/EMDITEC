import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNosotrosTextoComponent } from './c-nosotros-texto.component';

describe('CNosotrosTextoComponent', () => {
  let component: CNosotrosTextoComponent;
  let fixture: ComponentFixture<CNosotrosTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNosotrosTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNosotrosTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
