import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSecundariosTextoComponent } from './c-secundarios-texto.component';

describe('CSecundariosTextoComponent', () => {
  let component: CSecundariosTextoComponent;
  let fixture: ComponentFixture<CSecundariosTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSecundariosTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSecundariosTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
