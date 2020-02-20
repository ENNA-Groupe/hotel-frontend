import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie.model';
import { Subscription } from 'rxjs';
import { IonSlides, PopoverController, NavParams } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.scss'],
})
export class ProduitFormComponent implements OnInit {

  form: FormGroup;
  title: string = "Ajout de produit";
  photo: string;
  categories: Categorie[] = [];
  foncSub: Subscription;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  slideIndex: number = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  // slidesOptions = {
  //   initialSlide: 0,
  //   direction: 'horizontal',
  //   speed: 300,
  //   effect: slide,
  //   spaceBetween: 8,
  //   slidesPerView: 1.5,
  //   freeMode: true,
  //   loop: true
  // };

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private produitService: ProduitService
  ) {

  }

  ngOnInit() {
    this.slides.lockSwipeToNext(true);
    this.foncSub = this.produitService.getCategories().subscribe(
      foncs => this.categories = foncs
    );
    let id = this.navParams.get('id');
    if (id) {
      let item: Produit = this.produitService.getProduit(id);
      this.title = item.nom;
      this.photo = item.photo;
      this.initForm(item);
    }
    else {
      this.initForm({ id: null, categorieId: null, nom: '', description: '', uniteMesure: '', prixUnitairVente: 0 });
      this.photo = './assets/img/produit.png';
    }
  }

  ngOnDestroy() {
    this.foncSub.unsubscribe();
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  
  handleReaderLoaded(e) {
    this.photo = 'data:image/png;base64,' + btoa(e.target.result);
  }

  initForm(item) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      categorieId: new FormControl(item.categorieId, Validators.required),
      nom: new FormControl(item.nom, Validators.required),
      description: new FormControl(item.description),
      uniteMesure: new FormControl(item.uniteMesure, Validators.required),
      prixUnitaireVente: new FormControl(item.prixUnitaireVente, Validators.required),
    });
  }

  get categorieId() { return this.form.get('categorieId'); };
  get nom() { return this.form.get('nom'); };
  get description() { return this.form.get('description'); };
  get uniteMesure() { return this.form.get('uniteMesure'); };
  get prixUnitaireVente() { return this.form.get('prixUnitaireVente'); };

  onNext() {
    this.slides.lockSwipeToNext(false).then(
      () => {
        this.slides.slideNext().then(
          () => {
            this.slides.lockSwipeToNext(true);
            this.slides.getActiveIndex().then(
              i=>this.slideIndex = i
            );
          }
        );
      }
    );
  }

  onPrevious() {
    this.slides.lockSwipeToNext(false).then(
      () => {
        this.slides.slidePrev().then(
          () => {
            this.slides.getActiveIndex().then(
              i=>this.slideIndex = i
            );
          }
        );
      }
    );
       
  }

  onSubmit() {
    this.form.value.nom = this.form.value.nom.toUpperCase();
    this.form.value.photo = this.photo;
    this.onClose(this.form.value);
  }

  onClose(data) {
    this.popoverController.dismiss(data);
  }
}
