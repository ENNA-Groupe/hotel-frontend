import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
      icon: 'apps'
    },
    {
      
      title: 'Location',
      url: '/private/locations',
      icon: 'bed'
    },
    {
      title: 'Consommation',
      url: '/private/consommations',
      icon: 'beer'
    },
    {
      title: 'Chambres',
      url: '/private/chambres',
      icon: 'home'
    },
    {
      title: 'Produits',
      url: '/private/produits',
      icon: 'appstore'
    },
    {
      title: 'Intrants',
      url: '/private/intrants',
      icon: 'archive'
    },
    {
      title: 'Entrees',
      url: '/private/entrees',
      icon: 'return-left'
    },
    {
      title: 'Sorties',
      url: '/private/sorties',
      icon: 'return-right'
    },
    {
      title: 'Utilisateurs',
      url: '/private/users',
      icon: 'people'
    },
    {
      title: 'Clients',
      url: '/private/clients',
      icon: 'person'
    },
    {
      title: 'Fournisseurs',
      url: '/private/fournisseurs',
      icon: 'contact'
    },
    {
      title: 'Parametres',
      url: '/private/params',
      icon: 'cog'
    },
    {
      title: 'Stats',
      url: '/private/stats',
      icon: 'stats'
    }
  ];
  loggedIn = false;
  dark = false;
  user: User = {id: null, identifiant: '', password: '', nom: 'TEST', prenom: 'Test', photo: './assets/user.png', contact1: '90909090', contact2: '99009900', createdAt: '', deletedAt:'',updatedAt:'' };
  userSub: Subscription;

  constructor(
    private menu: MenuController,
    private data: DataService,
    private auth: AuthService,
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
