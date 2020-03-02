import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesuresPage } from './mesures.page';

describe('MesuresPage', () => {
  let component: MesuresPage;
  let fixture: ComponentFixture<MesuresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesuresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesuresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
