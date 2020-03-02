import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { Propriete } from 'src/app/models/propriete.model';
import { Subscription } from 'rxjs';
import { IonInfiniteScroll, ModalController, NavParams } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { ParamsService } from 'src/app/services/params.service';
import { Categorie } from 'src/app/models/categorie.model';

@Component({
  selector: 'app-produit-profil',
  templateUrl: './produit-profil.component.html',
  styleUrls: ['./produit-profil.component.scss'],
})
export class ProduitProfilComponent implements OnInit {

  title: string;
  item: Produit;
  categorie: Categorie;
  proprietes: Propriete[] = [];
  produitProprietes: any[] = [];
  activities: any[] = [];
  lastActiviteId: number = 0;
  menu = "infos";
  sub : Subscription;

  @Input() id: number;
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private produitService: ProduitService,
    private paramsService: ParamsService
  ) {
   
  }

  ngOnInit() {
    this.id = this.navParams.get('id');
    let trash = this.navParams.get('trash');
    if (this.id) {
      if (!trash) this.item = this.produitService.getProduit(this.id);
      else this.item = this.produitService.getProduitTrash(this.id);
      this.categorie = this.produitService.getCategorie(this.item.categorieId);
      this.title = this.categorie.nom + " " + this.item.nom;
    }
    // this.toggleInfiniteScroll(true);
    this.getActivities();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  segmentChanged(event){
    this.menu = event.target.value;
  }

  onClose() {
    this.modalController.dismiss();
  }

  getActivities() {
    return this.produitService.getProduitActivites(this.id, this.lastActiviteId).then(
      (res: any[]) => {
        res.forEach(
          item => this.activities.push(item)
        );
        this.lastActiviteId += res.length;
        return true;
      }
    );
  }


  loadData(event) {
    this.getActivities().then(
      () => event.target.complete()
    );
  }

  toggleInfiniteScroll(bool) {
    this.infiniteScroll.disabled = bool;
  }
}


