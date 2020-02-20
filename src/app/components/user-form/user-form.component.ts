import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams, IonSlides } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Fonction } from 'src/app/models/fonction.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {


  form: FormGroup;
  title: string = "Ajout d'utilisateur";
  photo: string;
  fonctions: Fonction[] = [];
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
    private userService: UserService
  ) {

  }

  ngOnInit() {
    let fonctionId = this.navParams.get('foncId');
    let id = this.navParams.get('id');
    this.slides.lockSwipeToNext(true);
    this.foncSub = this.userService.getFonctions().subscribe(
      foncs => this.fonctions = foncs
    );

    if (id) {
      let item: User = this.userService.getUser(id);
      this.title = item.nom;
      this.photo = item.photo;
      this.initForm(item);
    }
    else {
      this.initForm({ id: null, fonctionId: fonctionId, nom: '', penom: '', contact: '', identifiant: '' });
      this.photo = './assets/img/user.png';
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
      fonctionId: new FormControl(item.fonctionId, Validators.required),
      nom: new FormControl(item.nom, Validators.required),
      prenom: new FormControl(item.prenom),
      contact: new FormControl(item.contact, [Validators.required, Validators.minLength(8)]),
      identifiant: new FormControl(item.identifiant, [Validators.required, Validators.minLength(2)]),
    });
  }

  get fonctionId() { return this.form.get('fonctionId'); };
  get nom() { return this.form.get('nom'); };
  get prenom() { return this.form.get('prenom'); };
  get contact() { return this.form.get('contact'); };
  get identifiant() { return this.form.get('identifiant'); };

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
