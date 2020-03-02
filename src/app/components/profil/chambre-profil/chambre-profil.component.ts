import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Chambre } from 'src/app/models/chambre.model';
import { Propriete } from 'src/app/models/propriete.model';
import { Subscription } from 'rxjs';
import { IonInfiniteScroll, NavParams, ModalController } from '@ionic/angular';
import { ChambreService } from 'src/app/services/chambre.service';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'app-chambre-profil',
  templateUrl: './chambre-profil.component.html',
  styleUrls: ['./chambre-profil.component.scss'],
})
export class ChambreProfilComponent implements OnInit {
  title: string;
  item: Chambre;
  proprietes: Propriete[] = [];
  chambreProprietes: any[] = [];
  activities: any[] = [];
  lastActiviteId: number = 0;
  menu = "infos";
  sub : Subscription;

  @Input() id: number;
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private chambreService: ChambreService,
    private paramsService: ParamsService
  ) {
   
  }

  ngOnInit() {
    this.id = this.navParams.get('id');
    let trash = this.navParams.get('trash');
    this.sub = this.paramsService.getProprietes().subscribe(
      (res) => {
        this.proprietes = [];
        this.proprietes = res;
        this.onReset();
      }
    );

    if (this.id) {
      if (!trash) this.item = this.chambreService.getChambre(this.id);
      else this.item = this.chambreService.getChambreTrash(this.id);
      this.title = this.item.numero;
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
    this.paramsService.getChambreProprietes(this.id).then(
      (res: any[]) => {
        this.chambreProprietes = [];
        if (res.length===0) {
          this.proprietes.forEach(
            item => this.chambreProprietes.push({
              chambreId: this.id, 
              proprieteId: item.id,
              description: item.description, 
              isChecked: false
            })
          );
        } else {
          this.proprietes.forEach(
            item => {
              let i = res.findIndex(elem => elem.proprieteId===item.id);
              if (i===-1) {
                this.chambreProprietes.push({
                  chambreId: this.id, 
                  proprieteId: item.id,
                  description: item.description, 
                  isChecked: false
                });
              } else {
                res[i].description = item.description;
                this.chambreProprietes.push(res[i]);
              }
            }
          );
        }
      }
    );
  }

  onSave() {
    this.paramsService.saveChambreProprietes(this.chambreProprietes);
  }

  getActivities() {
    return this.chambreService.getChambreActivites(this.id, this.lastActiviteId).then(
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

