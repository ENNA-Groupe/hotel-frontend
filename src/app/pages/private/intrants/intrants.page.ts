import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/models/categorie.model';
import { Intrant } from 'src/app/models/intrant.model';
import { PopoverController } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { DataService } from 'src/app/services/data.service';
import { CategorieFormComponent } from 'src/app/components/forms/categorie-form/categorie-form.component';
import { CategorieProfilComponent } from 'src/app/components/profil/categorie-profil/categorie-profil.component';
import { IntrantFormComponent } from 'src/app/components/forms/intrant-form/intrant-form.component';
import { IntrantProfilComponent } from 'src/app/components/profil/intrant-profil/intrant-profil.component';

@Component({
  selector: 'app-intrants',
  templateUrl: './intrants.page.html',
  styleUrls: ['./intrants.page.scss'],
})
export class IntrantsPage implements OnInit, OnDestroy {
categorieSubscription: Subscription;
  categories: Categorie[];
  categorieTrashSubscription: Subscription;
  categoriesTrash: Categorie[];

  intrantSubscription: Subscription;
  intrants: Intrant[];

  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private produitService: ProduitService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.categorieSubscription =  this.produitService.getCategories().subscribe(
      (res: Categorie[]) => {
        this.categories = [];
        res.forEach(
          item => {
            if (item.isIntrant) this.categories.push(item);
          }
        );
      }
    );
    this.intrantSubscription =  this.produitService.getIntrants().subscribe(
      (res: Intrant[]) => {
        this.intrants = res;
      }
    );
    this.categorieTrashSubscription =  this.produitService.getCategoriesTrash().subscribe(
      (res: Categorie[]) => {
        this.categoriesTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.categorieSubscription.unsubscribe();
    this.intrantSubscription.unsubscribe();
    this.categorieTrashSubscription.unsubscribe();
  }

  async onAddCategorie() {
    const popover = await this.popoverController.create({
      component: CategorieFormComponent,
      translucent: false,
      componentProps:{
        isIntrant: true
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addCategorie(res.data);
      }
    )
    await popover.present();
  }

  async onEditCategorie(id) {
    const popover = await this.popoverController.create({
      component: CategorieFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.produitService.editCategorie(res.data);
      }
    )
    await popover.present();
  }

  async onShowCategorie(id) {
    const popover = await this.popoverController.create({
      component: CategorieProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }

  onDeleteCategorie(id: number){
    if(window.confirm('Voulez vous vraiment supprimer cette catégorie?')) this.produitService.deleteCategorie(id);
  }

  onRestoreCategorie(id: number){
    this.produitService.restoreCategorie(id);
  }

  
  async onAddIntrant(id) {
    const popover = await this.popoverController.create({
      component: IntrantFormComponent,
      translucent: false,
      componentProps: {
        catId: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addIntrant(res.data);
      }
    )
    await popover.present();
  }

  async onEditIntrant(id) {
    const popover = await this.popoverController.create({
      component: IntrantFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.produitService.editIntrant(res.data);
      }
    )
    await popover.present();
  }

  async onShowIntrant(id) {
    const popover = await this.popoverController.create({
      component: IntrantProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDeleteIntrant(id: number){
   if(window.confirm('Voulez vous vraiment supprimer ce produit?')) this.produitService.deleteIntrant(id);
  }

  onRestoreIntrant(id: number){
    if(window.confirm('Voulez vous vraiment restorer ce produit?')) this.produitService.restoreIntrant(id);
  }

}