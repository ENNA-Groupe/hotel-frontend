import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietePage } from './propriete.page';

describe('ProprietePage', () => {
  let component: ProprietePage;
  let fixture: ComponentFixture<ProprietePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprietePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
