import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionsPage } from './fonctions.page';

describe('FonctionsPage', () => {
  let component: FonctionsPage;
  let fixture: ComponentFixture<FonctionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonctionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
