import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { EntreeService } from 'src/app/services/entree.service';
import { Router } from '@angular/router';
import { FournisseurFormComponent } from 'src/app/components/forms/fournisseur-form/fournisseur-form.component';
import { FournisseurProfilComponent } from 'src/app/components/profil/fournisseur-profil/fournisseur-profil.component';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.page.html',
  styleUrls: ['./fournisseurs.page.scss'],
})
export class FournisseursPage implements OnInit {

  fournisseurSubscription: Subscription;
  fournisseurs: Fournisseur[];
  fournisseurTrashSubscription: Subscription;
  fournisseursTrash: Fournisseur[];
  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private data: DataService,
    private entreeService: EntreeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fournisseurSubscription =  this.entreeService.getFournisseurs().subscribe(
      (res: Fournisseur[]) => {
        this.fournisseurs = res;
      }
    );
    
    this.fournisseurTrashSubscription =  this.entreeService.getFournisseursTrash().subscribe(
      (res: Fournisseur[]) => {
        this.fournisseursTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.fournisseurSubscription.unsubscribe();
    this.fournisseurSubscription.unsubscribe();
    this.fournisseurTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: FournisseurFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.entreeService.addFournisseur(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
    const popover = await this.popoverController.create({
      component: FournisseurFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.entreeService.editFournisseur(res.data);
      }
    )
    await popover.present();
  }

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: FournisseurProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDelete(id: number){
    this.entreeService.deleteFournisseur(id);
  }

  onRestore(id: number){
    this.entreeService.restoreFournisseur(id);
  }

}