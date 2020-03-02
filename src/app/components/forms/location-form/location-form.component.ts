import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Propriete } from 'src/app/models/propriete.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Chambre } from 'src/app/models/chambre.model';
import { Client } from 'src/app/models/client.model';
import { Subscription } from 'rxjs';
import { PopoverController, NavParams, IonSlides } from '@ionic/angular';
import { ChambreService } from 'src/app/services/chambre.service';
import { LocationService } from 'src/app/services/location.service';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  title: string = "Ajout de produit";
  chambres: Chambre[] = [];
  clients: Client[] = [];
  chambre: Chambre;
  newClient: Client = {id: null, nom: null, prenom: null, contact1: null, contact2: null, createdAt: '', deletedAt: '', updatedAt: ''};
  client: Client;
  chambreId: number;
  clientId:number;
  prixJournalier: number;
  options: any[];
  // proprietes: Propriete[];
  subs1: Subscription;
  subs2: Subscription;
  // subs3: Subscription;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  slideIndex: number = 0;
  addClient: boolean = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private chambreService: ChambreService,
    private locationService: LocationService,
    private params: ParamsService
  ) {

  }

  ngOnInit() {
  
    this.slides.lockSwipeToNext(true);
    this.subs1 = this.locationService.getClients().subscribe(
      res => this.clients = res
    );
    this.subs2 = this.chambreService.getChambres().subscribe(
      res => this.chambres = res
    );
    // this.subs2 = this.params.getProprietes().subscribe(
    //   res => this.proprietes = res
    // );

    let id = this.navParams.get('id');
    if (id) {
      let item: any = this.locationService.getLocation(id);
      // this.title = item.cre;
      this.clientId = item.clientId;
      this.chambreId = item.chambreId;
      this.prixJournalier = item.prixJournalier;
      this.setClient();
      this.setChambre();
      this.getChambrePropriete();
    }
  }

  ngOnDestroy() {
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
  }

  onChooseChambre(chambreId){
    this.chambreId = chambreId;
    this.setChambre();
    this.getChambrePropriete();
  }

  setChambre(){
    this.chambre = this.chambres.find(item => item.id===this.chambreId);
  }

  onChooseClient(clientId) {
    this.clientId = clientId;
    this.setClient();
  }

  setClient(){
    this.client = this.clients.find(item => item.id===this.clientId);
  }


  getChambrePropriete(){
    this.options = [];
    this.prixJournalier = this.chambre.prixJournalier;
    this.params.getChambreProprietes(this.chambre.id).then(
      res =>{
        res.forEach(element => {
          element.description = this.params.getPropriete(element.proprieteId).description;
          element.coutAdditionnel = this.params.getPropriete(element.proprieteId).coutAdditionnel;
          if(element.coutAdditionnel!=0) this.options.push(element);
          
        });
      }
    );
  }

  onNext() {
    if(this.slideIndex===2) this.getChambrePropriete();
    this.slides.lockSwipeToNext(false).then(
      () => {
        this.slides.slideNext().then(
          () => {
            this.slides.lockSwipeToNext(true);
            this.slides.getActiveIndex().then(
              i=>{
                this.slideIndex = i
                if (i===1) {
                  console.log(this.newClient);
                  if(this.newClient.nom){
                    this.locationService.addClient(this.newClient).then(
                      (res: any) =>{
                        this.client =res;
                        this.newClient = {id: null, nom: null, prenom: null, contact1: null, contact2: null, createdAt: '', deletedAt: '', updatedAt: ''};
                      }
                    )
                  }
                }
              }
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
            this.slides.lockSwipeToNext(true);
            this.slides.getActiveIndex().then(
              i=>this.slideIndex = i
            );
          }
        );
      }
    );
       
  }

  onValidate(){
    this.onClose({clientId: this.client.id ,chambreId: this.chambre.id, prixJournalier: this.prixJournalier});
  }

  onClose(data) {
    this.popoverController.dismiss(data);
  }
}