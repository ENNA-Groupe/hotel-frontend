import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambresTabPage } from './chambres-tab.page';

describe('ChambresTabPage', () => {
  let component: ChambresTabPage;
  let fixture: ComponentFixture<ChambresTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChambresTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambresTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
