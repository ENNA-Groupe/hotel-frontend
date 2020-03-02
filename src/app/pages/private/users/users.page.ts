import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fonction } from 'src/app/models/fonction.model';
import { User } from 'src/app/models/user.model';
import { PopoverController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { FonctionFormComponent } from 'src/app/components/forms/fonction-form/fonction-form.component';
import { FonctionProfilComponent } from 'src/app/components/profil/fonction-profil/fonction-profil.component';
import { UserFormComponent } from 'src/app/components/forms/user-form/user-form.component';
import { UserProfilComponent } from 'src/app/components/profil/user-profil/user-profil.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 4,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      385: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 1
      },
      // when window width is >= 640px
      765: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      }
      // freeMode: true,
    }
  };

  fonctionSubscription: Subscription;
  fonctions: Fonction[] = [];
  fonctionTrashSubscription: Subscription;
  fonctionsTrash: Fonction[];

  userSubscription: Subscription;
  users: User[];
  userTrashSubscription: Subscription;
  usersTrash: User[];

  trash: boolean = false;

  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    private userService: UserService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.fonctionSubscription = this.userService.getFonctions().subscribe(
      (res: Fonction[]) => {
        if (res.length > 0) {
          this.fonctions = [];
          res.forEach((item: any) => {
            item.expand = false;
            this.fonctions.push(item);
          });
        }

      }
    );
    this.userSubscription = this.userService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      }
    );
    this.fonctionTrashSubscription = this.userService.getFonctionsTrash().subscribe(
      (res: Fonction[]) => {
        this.fonctionsTrash = res;
      }
    );
  }

  ngOnDestroy() {
    this.fonctionSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.fonctionTrashSubscription.unsubscribe();
  }

  async onAddFonction() {
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

  async onEditFonction(id) {
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

  async onShowFonction(id) {
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

  // onGoToItems(id){
  //   this.router.navigate(['private/users-tab/users', id]);
  // }

  onDeleteFonction(id: number) {
    this.userService.deleteFonction(id);
  }

  onRestoreFonction(id: number) {
    this.userService.restoreFonction(id);
  }

  async onAddUser(id: number) {
    const popover = await this.popoverController.create({
      component: UserFormComponent,
      translucent: false,
      componentProps: {
        foncId: id
      }
    });

    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.userService.addUser(res.data);
      }
    )
    await popover.present();
  }

  async onEditUser(id) {
    const popover = await this.popoverController.create({
      component: UserFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });

    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.userService.editUser(res.data);
      }
    )
    await popover.present();
  }

  async onShowUser(id) {
    const modal = await this.modalController.create({
      component: UserProfilComponent,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await modal.present();
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id);
  }

  onRestoreUser(id: number) {
    this.userService.restoreUser(id);
  }


}
