import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsommationFacturePage } from './consommation-facture.page';

describe('ConsommationFacturePage', () => {
  let component: ConsommationFacturePage;
  let fixture: ComponentFixture<ConsommationFacturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommationFacturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsommationFacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
