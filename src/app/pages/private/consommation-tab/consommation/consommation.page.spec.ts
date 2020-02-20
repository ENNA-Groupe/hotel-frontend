import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationPage } from './consommation.page';

describe('ConsommationPage', () => {
  let component: ConsommationPage;
  let fixture: ComponentFixture<ConsommationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
