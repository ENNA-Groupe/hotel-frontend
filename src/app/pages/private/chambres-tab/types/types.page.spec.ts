import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPage } from './types.page';

describe('TypesPage', () => {
  let component: TypesPage;
  let fixture: ComponentFixture<TypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
