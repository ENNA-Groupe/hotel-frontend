import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FonctionFormComponent } from 'src/app/components/fonction-form/fonction-form.component';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Fonction } from 'src/app/models/fonction.model';
import { FonctionProfilComponent } from 'src/app/components/fonction-profil/fonction-profil.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-fonctions',
  templateUrl: './fonctions.page.html',
  styleUrls: ['./fonctions.page.scss'],
})
export class FonctionsPage implements OnInit, OnDestroy {

  fonctionSubscription: Subscription;
  fonctions: Fonction[];
  fonctionTrashSubscription: Subscription;
  fonctionsTrash: Fonction[];

  userSubscription: Subscription;
  users: User[];

  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private userService: UserService,
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fonctionSubscription =  this.userService.getFonctions().subscribe(
      (res: Fonction[]) => {
        this.fonctions = res;
      }
    );
    this.userSubscription =  this.userService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      }
    );
    this.fonctionTrashSubscription =  this.userService.getFonctionsTrash().subscribe(
      (res: Fonction[]) => {
        this.fonctionsTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.fonctionSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.fonctionTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: FonctionFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.userService.addFonction(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
    const popover = await this.popoverController.create({
      component: FonctionFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.userService.editFonction(res.data);
      }
    )
    await popover.present();
  }

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: FonctionProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }

  onGoToItems(id){
    this.router.navigate(['private/users-tab/users', id]);
  }
  
  onDelete(id: number){
    this.userService.deleteFonction(id);
  }

  onRestore(id: number){
    this.userService.restoreFonction(id);
  }


}