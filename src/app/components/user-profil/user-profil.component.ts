import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { ModalController, NavParams, IonInfiniteScroll } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ParamsService } from 'src/app/services/params.service';
import { Control } from 'src/app/models/control.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit, OnDestroy {
  title: string;
  item: User;
  controls: Control[] = [];
  userControls: any[] = [];
  activities: any[] = [];
  lastActiviteId: number = 0;
  menu = "infos";
  sub : Subscription;

  @Input() id: number;
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private userService: UserService,
    private paramsService: ParamsService
  ) {
   
  }

  ngOnInit() {
    this.id = this.navParams.get('id');
    let trash = this.navParams.get('trash');
    this.sub = this.paramsService.getControls().subscribe(
      (res) => {
        this.controls = [];
        this.controls = res;
        this.onReset();
      }
    );

    if (this.id) {
      if (!trash) this.item = this.userService.getUser(this.id);
      else this.item = this.userService.getUserTrash(this.id);
      this.title = this.item.nom + ' ' + this.item.prenom;
    }
    // this.toggleInfiniteScroll(true);
    this.getActivities();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  segmentChanged(event){
    this.menu = event.target.value;
  }

  onClose() {
    this.modalController.dismiss();
  }

  onReset() {
    this.paramsService.getUserControls(this.id).then(
      (res: any[]) => {
        this.userControls = [];
        if (res.length===0) {
          this.controls.forEach(
            item => this.userControls.push({
              userId: this.id, 
              controlId: item.id,
              description: item.description, 
              isChecked: false
            })
          );
        } else {
          this.controls.forEach(
            item => {
              let i = res.findIndex(elem => elem.controlId===item.id);
              if (i===-1) {
                this.userControls.push({
                  userId: this.id, 
                  controlId: item.id,
                  description: item.description, 
                  isChecked: false
                });
              } else {
                res[i].description = item.description;
                this.userControls.push(res[i]);
              }
            }
          );
        }
      }
    );
  }

  onSave() {
    this.paramsService.saveUserControls(this.userControls);
  }

  getActivities() {
    return this.userService.getUserActivities(this.id, this.lastActiviteId).then(
      (res: any[]) => {
        res.forEach(
          item => this.activities.push(item)
        );
        this.lastActiviteId += res.length;
        return true;
      }
    );
  }


  loadData(event) {
    this.getActivities().then(
      () => event.target.complete()
    );
  }

  toggleInfiniteScroll(bool) {
    this.infiniteScroll.disabled = bool;
  }
}
