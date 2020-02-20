import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsTabPage } from './produits-tab.page';

describe('ProduitsTabPage', () => {
  let component: ProduitsTabPage;
  let fixture: ComponentFixture<ProduitsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
