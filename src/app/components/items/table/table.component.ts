import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ConsommationService } from 'src/app/services/consommation.service';
import { Table } from 'src/app/models/table.model';
import { Consommation } from 'src/app/models/consommation.model';
import { LocationService } from 'src/app/services/location.service';
import { Client } from 'src/app/models/client.model';
import { Subscription } from 'rxjs';
import { ModalController, PopoverController } from '@ionic/angular';
import { ConsommationFormComponent } from '../../forms/consommation-form/consommation-form.component';
import { ChooseClientComponent } from '../../forms/choose-client/choose-client.component';
import { ConsommationProfilComponent } from '../../profil/consommation-profil/consommation-profil.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() tableId: number;
  table: Table;
  consommation: Consommation;
  produits: any[] = [];
  chambreId: number;
  factureTotale: number;
  clients: Client[];
  client: Client;
  clientId: number;
  subs: Subscription;

  constructor(
    private consommationService: ConsommationService,
    private locationService: LocationService,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    console.log("table id ", this.tableId);
    this.table = this.consommationService.getTable(this.tableId);
    this.getConsommation();
    this.subs = this.consommationService.getConsommations().subscribe(
      () => this.getConsommation()
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getConsommation(){
    this.consommation = this.consommationService.getTableConsommation(this.tableId);
    if (this.consommation) {
      if (this.consommation.clientId) this.client = this.locationService.getClient(this.consommation.clientId)
    }
  }

  async onAddConso() {
    const modal = await this.modalController.create({
      component: ConsommationFormComponent,
      // componentProps: { 
      //   consommationId: this.consommation.id
      //  }
    });

    await modal.present();

    modal.onDidDismiss().then(
      res => {
        if (res.data) {
          console.log(res.data);
          this.factureTotale = res.data.map(item => item.quantite * item.prixUnitaire).reduce((a, b) => a + b, 0);
          this.consommationService.addConsommation({
            consommation: { tableId: this.tableId, factureTotale: this.factureTotale },
            produits: res.data
          });
        }
      }
    );


  }

  async onAddProduit() {
    const modal = await this.modalController.create({
      component: ConsommationFormComponent,
      componentProps: { 
        numeroTable: this.table.numero
       }
    });

    await modal.present();

    modal.onDidDismiss().then(
      res => {
        if (res.data) {
          console.log(res.data);
          this.factureTotale = res.data.map(item => item.quantite * item.prixUnitaire).reduce((a, b) => a + b, 0) + this.consommation.factureTotale;

          this.consommationService.addProduit({
            consommation: { consommationId: this.consommation.id, factureTotale: this.factureTotale },
            produits: res.data
          });
        }
      }
    ); 
  }

  async onShowFacture() {
    const modal = await this.modalController.create({
      component: ConsommationProfilComponent,
      componentProps: { 
        consommationId: this.consommation.id
       }
    });
    await modal.present();
  }

  async onChooseClient() {
    const popover = await this.popoverController.create({
      component: ChooseClientComponent,
      componentProps: { 
        clientId: this.consommation.clientId,
        numeroTable: this.table.numero
       }
    });

    await popover.present();

    popover.onDidDismiss().then(
      res => {
        if (res.data) {
          console.log(res.data);
          this.consommationService.chooseClient({clientId: res.data, consommationId: this.consommation.id});
        }
      }
    ); 
  }

}