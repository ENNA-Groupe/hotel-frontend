import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';
import { PopoverController } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ProduitFormComponent } from 'src/app/components/produit-form/produit-form.component';
import { ProduitProfilComponent } from 'src/app/components/produit-profil/produit-profil.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  categorieId: string;
  produitSubscription: Subscription;
  produits: Produit[];
  produitTrashSubscription: Subscription;
  produitsTrash: Produit[];
  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private produitService: ProduitService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.categorieId = this.route.snapshot.paramMap.get('categorieId');
   }

  ngOnInit() {
    this.produitSubscription =  this.produitService.getProduits().subscribe(
      (res: Produit[]) => {
        this.produits = res;
      }
    );
    this.produitTrashSubscription =  this.produitService.getProduitsTrash().subscribe(
      (res: Produit[]) => {
        this.produitsTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.produitSubscription.unsubscribe();
    this.produitTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: ProduitFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addProduit(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
    const popover = await this.popoverController.create({
      component: ProduitFormComponent,
      translucent: false,
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

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: ProduitProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDelete(id: number){
   if(window.confirm('Voulez vous vraiment supprimer ce produit?')) this.produitService.deleteProduit(id);
  }

  onRestore(id: number){
    this.produitService.restoreProduit(id);
  }

}