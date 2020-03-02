import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationFacturePage } from './location-facture.page';

describe('LocationFacturePage', () => {
  let component: LocationFacturePage;
  let fixture: ComponentFixture<LocationFacturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationFacturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationFacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
