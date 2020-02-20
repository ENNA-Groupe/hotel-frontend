import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IonSlides, PopoverController, NavParams } from '@ionic/angular';
import { ChambreService } from 'src/app/services/chambre.service';
import { Chambre } from 'src/app/models/chambre.model';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-chambre-form',
  templateUrl: './chambre-form.component.html',
  styleUrls: ['./chambre-form.component.scss'],
})
export class ChambreFormComponent implements OnInit {

  form: FormGroup;
  title: string = "Ajout d'utilisateur";
  photo: string;
  types: Type[] = [];
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
    private chambreService: ChambreService
  ) {

  }

  ngOnInit() {
    this.slides.lockSwipeToNext(true);
    this.foncSub = this.chambreService.getTypes().subscribe(
      foncs => this.types = foncs
    );
    let id = this.navParams.get('id');
    let typeId = this.navParams.get('tId');
    if (id) {
      let item: Chambre = this.chambreService.getChambre(id);
      this.title = item.numero;
      this.photo = item.photo;
      this.initForm(item);
    }
    else {
      this.initForm({ id: null, typeId: typeId, numero: '', description: '', prixJournalier: null });
      this.photo = './assets/img/chambre.png';
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
      typeId: new FormControl(item.typeId, Validators.required),
      numero: new FormControl(item.numero, Validators.required),
      description: new FormControl(item.description),
      prixJournalier: new FormControl(item.prixJournalier, Validators.required),
    });
  }

  get typeId() { return this.form.get('typeId'); };
  get numero() { return this.form.get('numero'); };
  get description() { return this.form.get('description'); };
  get prixJournalier() { return this.form.get('prixJournalier'); };

  // onNext() {
  //   this.slides.lockSwipeToNext(false).then(
  //     () => {
  //       this.slides.slideNext().then(
  //         () => {
  //           this.slides.lockSwipeToNext(true);
  //           this.slides.getActiveIndex().then(
  //             i=>this.slideIndex = i
  //           );
  //         }
  //       );
  //     }
  //   );
  // }

  // onPrevious() {
  //   this.slides.lockSwipeToNext(false).then(
  //     () => {
  //       this.slides.slidePrev().then(
  //         () => {
  //           this.slides.getActiveIndex().then(
  //             i=>this.slideIndex = i
  //           );
  //         }
  //       );
  //     }
  //   );
       
  // }

  onSubmit() {
    this.form.value.numero = this.form.value.numero.toUpperCase();
    // this.form.value.photo = this.photo;
    this.onClose(this.form.value);
  }

  onClose(data) {
    this.popoverController.dismiss(data);
  }
}

