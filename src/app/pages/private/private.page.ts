import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ConsommationService } from 'src/app/services/consommation.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage implements OnInit {
  isSearching: boolean = false;

  appPages = [
    {
      title: 'Dashboard',
      url: '/private/dashboard',
      icon: 'apps-outline'
    },
    {
      
      title: 'Location',
      url: '/private/locations',
      icon: 'bed-outline'
    },
    {
      title: 'Consommation',
      url: '/private/consommations',
      icon: 'beer-outline'
    },
    {
      title: 'Chambres',
      url: '/private/chambres',
      icon: 'home-outline'
    },
    {
      title: 'Produits',
      url: '/private/produits',
      icon: 'basket-outline'
    },
    {
      title: 'Intrants',
      url: '/private/intrants',
      icon: 'archive-outline'
    },
    {
      title: 'Entrees',
      url: '/private/entrees',
      icon: 'return-down-back-outline'
    },
    {
      title: 'Sorties',
      url: '/private/sorties',
      icon: 'return-down-forward-outline'
    },
    {
      title: 'Utilisateurs',
      url: '/private/users',
      icon: 'people-outline'
    },
    {
      title: 'Clients',
      url: '/private/clients',
      icon: 'person-outline'
    },
    {
      title: 'Fournisseurs',
      url: '/private/fournisseurs',
      icon: 'clipboard-outline'
    },
    {
      title: 'Parametres',
      url: '/private/params',
      icon: 'cog-outline'
    },
    {
      title: 'Stats',
      url: '/private/stats',
      icon: 'stats-chart-outline'
    }
  ];
  loggedIn = false;
  dark = false;
  user: User = {id: null, identifiant: '', password: '', nom: 'TEST', prenom: 'Test', photo: './assets/img/user.png', contact1: '90909090', contact2: '99009900', createdAt: '', deletedAt:'',updatedAt:'' };
  userSub: Subscription;

  constructor(
    private menu: MenuController,
    private data: DataService,
    private auth: AuthService,
    private consommationService: ConsommationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userSub = this.data.getUser().subscribe(
      user => {if (user) this.user =user}
    );
  }

  onSearch(val){
    this.data.searchValue = '';
    this.isSearching = val;
  }

  onLogout(){
    this.auth.logout().then(
      res => {
        if(res) this.router.navigate(['']);
      }
    );
  }

}
