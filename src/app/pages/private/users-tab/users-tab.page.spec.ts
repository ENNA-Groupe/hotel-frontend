import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTabPage } from './users-tab.page';

describe('UsersTabPage', () => {
  let component: UsersTabPage;
  let fixture: ComponentFixture<UsersTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
