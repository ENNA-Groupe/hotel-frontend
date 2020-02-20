import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationsPage } from './consommations.page';

describe('ConsommationsPage', () => {
  let component: ConsommationsPage;
  let fixture: ComponentFixture<ConsommationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
