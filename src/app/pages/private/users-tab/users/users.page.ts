import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { UserProfilComponent } from 'src/app/components/user-profil/user-profil.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  fonctionId: string;
  userSubscription: Subscription;
  users: User[];
  userTrashSubscription: Subscription;
  usersTrash: User[];
  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private userService: UserService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.fonctionId = this.route.snapshot.paramMap.get('fonctionId');
   }

  ngOnInit() {
    this.userSubscription =  this.userService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      }
    );
    this.userTrashSubscription =  this.userService.getUsersTrash().subscribe(
      (res: User[]) => {
        this.usersTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
    this.userTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: UserFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.userService.addUser(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
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

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: UserProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDelete(id: number){
    this.userService.deleteUser(id);
  }

  onRestore(id: number){
    this.userService.restoreUser(id);
  }


}