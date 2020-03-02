import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/models/categorie.model';
import { Produit } from 'src/app/models/produit.model';
import { PopoverController, ModalController } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { DataService } from 'src/app/services/data.service';
import { CategorieFormComponent } from 'src/app/components/forms/categorie-form/categorie-form.component';
import { CategorieProfilComponent } from 'src/app/components/profil/categorie-profil/categorie-profil.component';
import { ProduitFormComponent } from 'src/app/components/forms/produit-form/produit-form.component';
import { ProduitProfilComponent } from 'src/app/components/profil/produit-profil/produit-profil.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit, OnDestroy {

  categorieSubscription: Subscription;
  categories: Categorie[];
  categorieTrashSubscription: Subscription;
  categoriesTrash: Categorie[];

  produitSubscription: Subscription;
  produits: Produit[];

  trash:boolean = false;
  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 4,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      385: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 1
      },
      // when window width is >= 640px
      765: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      }
      // freeMode: true,
    }
  };

  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    private produitService: ProduitService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.categorieSubscription =  this.produitService.getCategories().subscribe(
      (res: Categorie[]) => {
        this.categories = [];
        res.forEach(
          item => {
            if (!item.isIntrant) this.categories.push(item);
          }
        );
      }
    );
    this.produitSubscription =  this.produitService.getProduits().subscribe(
      (res: Produit[]) => {
        this.produits = res;
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
    this.produitSubscription.unsubscribe();
    this.categorieTrashSubscription.unsubscribe();
  }

  async onAddCategorie() {
    const popover = await this.popoverController.create({
      component: CategorieFormComponent,
      translucent: false,
      componentProps:{
        isIntrant: false
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
    if(window.confirm('Voulez vous vraiment restorer cette catégorie?')) this.produitService.restoreCategorie(id);
  }

  
  async onAddProduit(id) {
    const popover = await this.popoverController.create({
      component: ProduitFormComponent,
      translucent: false,
      componentProps: {
        catId: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addProduit(res.data);
      }
    )
    await popover.present();
  }

  async onEditProduit(id) {
    const popover = await this.popoverController.create({
      component: ProduitFormComponent,
      translucent: true,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.produitService.editProduit(res.data);
      }
    )
    await popover.present();
  }

  async onShowProduit(id) {
    const modal = await this.modalController.create({
      component: ProduitProfilComponent,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await modal.present();
  }
  
  onDeleteProduit(id: number){
   if(window.confirm('Voulez vous vraiment supprimer ce produit?')) this.produitService.deleteProduit(id);
  }

  onRestoreProduit(id: number){
    if(window.confirm('Voulez vous vraiment restorer ce produit?')) this.produitService.restoreProduit(id);
  }

}