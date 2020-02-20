import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrantsPage } from './intrants.page';

describe('IntrantsPage', () => {
  let component: IntrantsPage;
  let fixture: ComponentFixture<IntrantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
