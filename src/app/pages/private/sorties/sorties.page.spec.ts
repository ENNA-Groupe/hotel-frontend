import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortiesPage } from './sorties.page';

describe('SortiesPage', () => {
  let component: SortiesPage;
  let fixture: ComponentFixture<SortiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
