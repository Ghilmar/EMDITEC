import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNosotrosMisionVicionComponent } from './c-nosotros-mision-vicion.component';

describe('CNosotrosMisionVicionComponent', () => {
  let component: CNosotrosMisionVicionComponent;
  let fixture: ComponentFixture<CNosotrosMisionVicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNosotrosMisionVicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNosotrosMisionVicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
