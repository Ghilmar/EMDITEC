import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSecundariosPortadaComponent } from './c-secundarios-portada.component';

describe('CSecundariosPortadaComponent', () => {
  let component: CSecundariosPortadaComponent;
  let fixture: ComponentFixture<CSecundariosPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSecundariosPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSecundariosPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
