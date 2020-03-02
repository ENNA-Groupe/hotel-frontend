import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Table } from 'src/app/models/table.model';
import { Consommation } from 'src/app/models/consommation.model';
import { PopoverController, ModalController } from '@ionic/angular';
import { ConsommationService } from 'src/app/services/consommation.service';
import { DataService } from 'src/app/services/data.service';
import { TableFormComponent } from 'src/app/components/forms/table-form/table-form.component';
import { TableProfilComponent } from 'src/app/components/profil/table-profil/table-profil.component';
import { ConsommationFormComponent } from 'src/app/components/forms/consommation-form/consommation-form.component';

@Component({
  selector: 'app-consommations',
  templateUrl: './consommations.page.html',
  styleUrls: ['./consommations.page.scss'],
})
export class ConsommationsPage implements OnInit {

 tableSubscription: Subscription;
 tables: Table[];
 tableTrashSubscription: Subscription;
 tablesTrash: Table[];

  consommationSubscription: Subscription;
  consommations: Consommation[];

  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private consommationService: ConsommationService,
    private modalController: ModalController,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.tableSubscription =  this.consommationService.getTables().subscribe(
      (res: Table[]) => {
        this.tables = res;
      }
    );
    this.consommationSubscription =  this.consommationService.getConsommations().subscribe(
      (res: Consommation[]) => {
        this.consommations = res;
      }
    );
    this.tableTrashSubscription =  this.consommationService.getTablesTrash().subscribe(
      (res: Table[]) => {
        this.tablesTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.tableSubscription.unsubscribe();
    this.consommationSubscription.unsubscribe();
    this.tableTrashSubscription.unsubscribe();
  }

  async onAddTable() {
    const popover = await this.popoverController.create({
      component: TableFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.consommationService.addTable(res.data);
      }
    )
    await popover.present();
  }

  async onEditTable(id) {
    const popover = await this.popoverController.create({
      component: TableFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.consommationService.editTable(res.data);
      }
    )
    await popover.present();
  }

  async onShowTable(id) {
    const popover = await this.popoverController.create({
      component: TableProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }

  onDeleteTable(id: number){
    this.consommationService.deleteTable(id);
  }

  onRestoreTable(id: number){
    this.consommationService.restoreTable(id);
  }

  async onAddConso(tableId: number, numeroTable: number, consoId?: number) {
    if(!consoId){
      const modal = await this.modalController.create({
        component: ConsommationFormComponent,
        componentProps: {
          numeroTable: numeroTable
        }
      });
    
      modal.onDidDismiss().then(
        (res) => {
          console.log(res.data);
          
          if (res.data) {
            res.data.consommation.tableId=tableId;
            res.data.consommation.factureTotale = res.data.produits.map(item=>item.quantite*item.prixUnitaire).reduce((a,b)=>a+b,0);
            this.consommationService.addConsommation(res.data);
          }
        }
      )
      await modal.present();
    } else{
      let conso = this.consommationService.getConsommation(consoId);
      this.consommationService.addConsommation(conso);
    }
    
  }

 onEditConsommation(id) {
    
  }

  onShowConsommation(id) {
  }
  
  onDeleteConsommation(id: number){
   if(window.confirm('Voulez vous vraiment supprimer ce Consommation?')) this.consommationService.deleteConsommation(id);
  }

  onRestoreConsommation(id: number){
    this.consommationService.restoreConsommation(id);
  }

}