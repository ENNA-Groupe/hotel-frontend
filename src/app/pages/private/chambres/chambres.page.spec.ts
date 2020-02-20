import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambresPage } from './chambres.page';

describe('ChambresPage', () => {
  let component: ChambresPage;
  let fixture: ComponentFixture<ChambresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChambresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
