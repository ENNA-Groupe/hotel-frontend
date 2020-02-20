import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreesPage } from './entrees.page';

describe('EntreesPage', () => {
  let component: EntreesPage;
  let fixture: ComponentFixture<EntreesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
