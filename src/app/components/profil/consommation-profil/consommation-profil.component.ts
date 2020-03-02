import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ConsommationService } from 'src/app/services/consommation.service';
import { LocationService } from 'src/app/services/location.service';
import { Consommation } from 'src/app/models/consommation.model';
import { Client } from 'src/app/models/client.model';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-consommation-profil',
  templateUrl: './consommation-profil.component.html',
  styleUrls: ['./consommation-profil.component.scss'],
})
export class ConsommationProfilComponent implements OnInit {

  consommationId: number;
  consommation: Consommation;
  client: Client;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private consommationservice: ConsommationService,
    private locationService: LocationService,
    private produitService: ProduitService,
    private router: Router,
    private printService: PrintService
  ) { }

  ngOnInit() {
    this.consommationId = this.navParams.get("consommationId");
    this.consommation = this.consommationservice.getConsommation(this.consommationId);
    this.client = this.locationService.getClient(this.consommation.clientId);
  }

  endConso() {
    this.consommationservice.endConso({ consommationId: this.consommationId }).then(
      res => {
        console.log(res);
        if (res) {
          if (window.confirm("Voulez vous imprimer la facture?")) {
            this.printService.printDocument('consommation-facture', [this.consommationId]).then(
              () => this.onClose()
            );
          }
        }
      }
    )
  }

  getCategorie(id) {
    return this.produitService.getCategorie(id).nom;
  }

  onClose() {
    this.modalController.dismiss();
  }

}
