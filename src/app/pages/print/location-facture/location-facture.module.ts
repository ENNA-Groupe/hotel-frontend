import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationFacturePageRoutingModule } from './location-facture-routing.module';

import { LocationFacturePage } from './location-facture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationFacturePageRoutingModule
  ],
  declarations: [LocationFacturePage]
})
export class LocationFacturePageModule {}
