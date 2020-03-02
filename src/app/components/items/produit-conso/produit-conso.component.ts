import { Component, OnInit, Input } from '@angular/core';
import { ConsommationService } from 'src/app/services/consommation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produit-conso',
  templateUrl: './produit-conso.component.html',
  styleUrls: ['./produit-conso.component.scss'],
})
export class ProduitConsoComponent implements OnInit {
  @Input("produitId") produitId: number;
  @Input("consommationId") consommationId: number;
  produit: any;
  q: number =1;
  subs: Subscription;

  constructor(
    private consommationService: ConsommationService
  ) { }

  ngOnInit() {
    this.produit = this.consommationService.getConsommationProduit(this.consommationId, this.produitId);
    this.subs = this.consommationService.getConsommations().subscribe(
      () => this.produit = this.consommationService.getConsommationProduit(this.consommationId, this.produitId)
    );
  }

  onAddProdConso() {
    if (window.confirm('Voulez vous ajouter ' + this.q + " " + this.produit.nom + " à cette consommation?")){
      this.consommationService.addProdConso({ consommationId: this.consommationId, productId: this.produitId, quantite: this.q, prixUnitaire: this.produit.prixUnitaireVente }).then(
        (produit) => {
          this.produit = produit
        }
      );
    } 
  }

  onRemoveProdConso() {
    if (this.q < this.produit.consommationProduit.quantite) {
      if (window.confirm('Voulez vous retrancher ' + this.q + " " + this.produit.nom + " à cette consommation?")) this.consommationService.removeProdConso({ consommationId: this.consommationId, productId: this.produitId, quantite: this.q, prixUnitaire: this.produit.prixUnitaireVente });
    } else if (this.q === this.produit.consommationProduit.quantite) this.onRemoveProduit();
    else window.alert("Vous ne pouvez pas retrancher plus de " + this.produit.consommationProduit.quantite + " " + this.produit.nom + " de cette table!");
  }


  onRemoveProduit() {
    if (window.confirm("Voulez vous retirer ce produit  de la table?")) {
      this.consommationService.removeProduit({consommationId: this.consommationId, productId: this.produitId, quantite: this.q, prixUnitaire: this.produit.prixUnitaireVente});
    }
  }

}
