import { Component, OnInit } from '@angular/core';
import { EntreeService } from 'src/app/services/entree.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreeFormComponent } from 'src/app/components/forms/entree-form/entree-form.component';
import { EntreeProfilComponent } from 'src/app/components/profil/entree-profil/entree-profil.component';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.page.html',
  styleUrls: ['./entrees.page.scss'],
})
export class EntreesPage implements OnInit {

  entreeSubscription: Subscription;
  entrees: Entree[];
  entreeTrashSubscription: Subscription;
  entreesTrash: Entree[];
  trash:boolean = false;
  menu='entrees';

  constructor(
    private modalController: ModalController,
    private data: DataService,
    private entreeService: EntreeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.entreeSubscription =  this.entreeService.getEntrees().subscribe(
      (res: Entree[]) => {
        this.entrees = res;
      }
    );
    
    this.entreeTrashSubscription =  this.entreeService.getEntreesTrash().subscribe(
      (res: Entree[]) => {
        this.entreesTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.entreeSubscription.unsubscribe();
    this.entreeSubscription.unsubscribe();
    this.entreeTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const modal = await this.modalController.create({
      component: EntreeFormComponent,
      
    });
  
    modal.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.entreeService.addEntree(res.data);
      }
    )
    await modal.present();
  }

  async onEdit(id) {
    const modal = await this.modalController.create({
      component: EntreeFormComponent,
      componentProps: {
        id: id
      }
    });
  
    modal.onDidDismiss().then(
      (res) => {
        if (res.data) this.entreeService.editEntree(res.data);
      }
    )
    await modal.present();
  }

  async onShow(id) {
    const modal = await this.modalController.create({
      component: EntreeProfilComponent,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await modal.present();
  }
  
  onDelete(id: number){
    this.entreeService.deleteEntree(id);
  }

  onRestore(id: number){
    this.entreeService.restoreEntree(id);
  }

  getFournisseurNom(id: number) {
    return this.entreeService.getFournisseur(id).nom;
  }

  loadData(event){
   if(!this.trash) this.entreeService.getServerEntrees();
   else this.entreeService.getSeverEntreesTrash();
  }

}