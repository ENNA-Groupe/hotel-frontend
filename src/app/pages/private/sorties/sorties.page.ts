import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SortieService } from 'src/app/services/sortie.service';
import { Router } from '@angular/router';
import { SortieFormComponent } from 'src/app/components/sortie-form/sortie-form.component';
import { SortieProfilComponent } from 'src/app/components/sortie-profil/sortie-profil.component';
import { Sortie } from 'src/app/models/sortie.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sorties',
  templateUrl: './sorties.page.html',
  styleUrls: ['./sorties.page.scss'],
})
export class SortiesPage implements OnInit {

  sortieSubscription: Subscription;
  sorties: Sortie[];
  sortieTrashSubscription: Subscription;
  sortiesTrash: Sortie[];
  trash:boolean = false;

  constructor(
    private modalController: ModalController,
    private data: DataService,
    private sortieService: SortieService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sortieSubscription =  this.sortieService.getSorties().subscribe(
      (res: Sortie[]) => {
        this.sorties = res;
      }
    );
    
    this.sortieTrashSubscription =  this.sortieService.getSortiesTrash().subscribe(
      (res: Sortie[]) => {
        this.sortiesTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.sortieSubscription.unsubscribe();
    this.sortieSubscription.unsubscribe();
    this.sortieTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const modal = await this.modalController.create({
      component: SortieFormComponent,
      
    });
  
    modal.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.sortieService.addSortie(res.data);
      }
    )
    await modal.present();
  }

  async onEdit(id) {
    const modal = await this.modalController.create({
      component: SortieFormComponent,
      componentProps: {
        id: id
      }
    });
  
    modal.onDidDismiss().then(
      (res) => {
        if (res.data) this.sortieService.editSortie(res.data);
      }
    )
    await modal.present();
  }

  async onShow(id) {
    const modal = await this.modalController.create({
      component: SortieProfilComponent,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await modal.present();
  }
  
  onDelete(id: number){
    this.sortieService.deleteSortie(id);
  }

  onRestore(id: number){
    this.sortieService.restoreSortie(id);
  }

  getUserNom(id: number) {
    return this.userService.getUser(id).nom;
  }

  loadData(event){
   if(!this.trash) this.sortieService.getServerSorties();
   else this.sortieService.getSeverSortiesTrash();
  }

}
