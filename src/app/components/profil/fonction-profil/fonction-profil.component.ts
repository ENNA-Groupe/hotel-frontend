import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Fonction } from 'src/app/models/fonction.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fonction-profil',
  templateUrl: './fonction-profil.component.html',
  styleUrls: ['./fonction-profil.component.scss'],
})
export class FonctionProfilComponent implements OnInit {

  title: string;
  item:Fonction;

constructor(
  private popoverController: PopoverController,
  private navParams: NavParams,
  private userService: UserService
) { 

}

ngOnInit() {
  let id = this.navParams.get('id');
  let trash = this.navParams.get('trash');
  if(id) {
    if (!trash) this.item = this.userService.getFonction(id);
    else this.item = this.userService.getFonctionTrash(id);
    this.title = 'fonction ' + this.item.nom;
  } 
}

onClose(){
  this.popoverController.dismiss();
}

}
