import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Subscription } from 'rxjs';
import { PopoverController, NavParams } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-choose-client',
  templateUrl: './choose-client.component.html',
  styleUrls: ['./choose-client.component.scss'],
})
export class ChooseClientComponent implements OnInit, OnDestroy {

  clients: any[];
  clientId: number;
  sub: Subscription;
  numeroTable: string;

  constructor(
    private locationService: LocationService,
    private popoverController: PopoverController,
    private navParams: NavParams,
  ) {
  
  }

  ngOnInit() {
    this.sub = this.locationService.getClients().subscribe(res => this.clients = res);
    this.numeroTable = this.navParams.get("numeroTable");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onValidate(){
    this.onClose(this.clientId);
  }

  onClose(data?){
    this.popoverController.dismiss(data);
  }

}
