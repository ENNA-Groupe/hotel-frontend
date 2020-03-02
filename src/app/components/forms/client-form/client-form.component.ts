import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { LocationService } from 'src/app/services/location.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {

  form: FormGroup;
  title: string = "Ajout de client"
  
  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private locationService: LocationService
  ) { 
  
  }
  
  ngOnInit() {
    let id = this.navParams.get('id');
    let isIntrant= this.navParams.get('isIntrant');
    if(id) {
      let item: Client = this.locationService.getClient(id);
      this.title = item.nom;
      this.initForm(item);
    } 
    else this.initForm({ id: null,  nom: '', penom: '', contact1: '', contact2: '', adresse: '' });
  }
  
  initForm(item){
    this.form = new FormGroup({
      id: new FormControl(item.id),
      nom: new FormControl(item.nom, Validators.required),
      prenom: new FormControl(item.prenom),
      contact1: new FormControl(item.contact1, [Validators.required, Validators.minLength(8)]),
      contact2: new FormControl(item.contact2),
      adresse: new FormControl(item.adresse, [Validators.required, Validators.minLength(2)]),
    });
  }
  
  
  get nom() { return this.form.get('nom'); };
  get prenom() { return this.form.get('prenom'); };
  get contact1() { return this.form.get('contact1'); };
  get adresse() { return this.form.get('adresse'); };
  
  onSubmit(){
   this.form.value.nom = this.form.value.nom.toUpperCase();
    this.onClose(this.form.value);
  }
  
  onClose(data){
    this.popoverController.dismiss(data);
  }
  
  }
  
