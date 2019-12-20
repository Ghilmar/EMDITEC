import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSoftwareTextoComponent } from './c-software-texto.component';

describe('CSoftwareTextoComponent', () => {
  let component: CSoftwareTextoComponent;
  let fixture: ComponentFixture<CSoftwareTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSoftwareTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSoftwareTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
