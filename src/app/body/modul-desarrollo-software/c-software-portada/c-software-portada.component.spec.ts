import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSoftwarePortadaComponent } from './c-software-portada.component';

describe('CSoftwarePortadaComponent', () => {
  let component: CSoftwarePortadaComponent;
  let fixture: ComponentFixture<CSoftwarePortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSoftwarePortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSoftwarePortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
