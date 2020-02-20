import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Fonction } from '../models/fonction.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private fonctions: Fonction[];
  private fonctionsTrash: Fonction[];
  private users: User[];
  private usersTrash: User[];


  private fonctionSubject = new BehaviorSubject<Fonction[]>([]);
  private fonctionTrashSubject = new BehaviorSubject<Fonction[]>([]);
  private userSubject = new BehaviorSubject<User[]>([]);
  private userTrashSubject = new BehaviorSubject<User[]>([]);


  constructor(
    private api: ApiService
  ) {
    this.api.post('fonction:all', null).then(
      (res: Fonction[]) => {
        this.fonctions = res;
        this.fonctionSubject.next(this.fonctions);
      }
    );
    this.api.post('fonction:trash', null).then(
      (res: Fonction[]) => {
        this.fonctionsTrash = res;
        this.fonctionTrashSubject.next(this.fonctionsTrash);
      }
    );

    this.api.post('user:all', null).then(
      (res: User[]) => {
        this.users = res;
        this.userSubject.next(this.users);
      }
    );
    this.api.post('user:trash', null).then(
      (res: User[]) => {
        this.usersTrash = res;
        this.userTrashSubject.next(this.usersTrash);
      }
    );

    this.api.getStreamData().subscribe(
      (res) => {
        if (res.operation.model === "Fonction") {
          if (res.operation.typeOperation === 'add') {
            this.fonctions.push(res.data);
            this.fonctionSubject.next(this.fonctions);
          } else if (res.operation.typeOperation === 'edit') {
            let i = this.fonctions.findIndex(item => item.id === res.data.id);
            this.fonctions[i] = res.data;
            this.fonctionSubject.next(this.fonctions);
          } else if (res.operation.typeOperation === 'delete') {
            let i = this.fonctions.findIndex(item => item.id === res.data.id);
            this.fonctions.splice(i, 1);
            this.fonctionSubject.next(this.fonctions);
            this.fonctionsTrash.push(res.data);
            this.fonctionTrashSubject.next(this.fonctionsTrash);
            this.fonctionSubject.next(this.fonctions);
          } else if (res.operation.typeOperation === 'restore') {
            let i = this.fonctionsTrash.findIndex(item => item.id === res.data.id);
            this.fonctionsTrash.splice(i, 1);
            this.fonctionTrashSubject.next(this.fonctionsTrash);
            this.fonctions.push(res.data);
            this.fonctionSubject.next(this.fonctions);
          }

        } else if (res.operation.model === "User") {
          if (res.operation.typeOperation === 'add') {
            this.users.push(res.data);
            this.userSubject.next(this.users);
          } else if (res.operation.typeOperation === 'edit') {
            let i = this.users.findIndex(item => item.id === res.data.id);
            this.users[i] = res.data;
            this.userSubject.next(this.users);
          } else if (res.operation.typeOperation === 'delete') {
            let i = this.users.findIndex(item => item.id === res.data.id);
            this.users.splice(i, 1);
            this.userSubject.next(this.users);
            this.usersTrash.push(res.data);
            this.userTrashSubject.next(this.usersTrash);
            this.userSubject.next(this.users);
          } else if (res.operation.typeOperation === 'restore') {
            let i = this.usersTrash.findIndex(item => item.id === res.data.id);
            this.usersTrash.splice(i, 1);
            this.userTrashSubject.next(this.usersTrash);
            this.users.push(res.data);
            this.userSubject.next(this.users);
          }
        }
      }
    );
  }

  /**
   * Fonction
   */

  getFonctions() {
    return this.fonctionSubject.asObservable();
  }

  getFonctionsTrash() {
    return this.fonctionTrashSubject.asObservable();
  }

  getFonctionTrash(id) {
    return this.fonctionsTrash.find(item => item.id === id);
  }

  getFonction(id) {
    return this.fonctions.find(item => item.id === id);
  }

  addFonction(data) {
    return this.api.post('fonction:add', data).then(
      (res: Fonction) => {
        this.fonctions.push(res);
        this.fonctionSubject.next(this.fonctions);
      });
  }

  editFonction(data) {
    return this.api.post('fonction:edit', data).then(
      (res: Fonction) => {
        let i = this.fonctions.findIndex(item => item.id === res.id);
        this.fonctions[i] = res;
        this.fonctionSubject.next(this.fonctions);
      });
  }

  deleteFonction(id) {
    return this.api.post('fonction:delete', id).then(
      (res: Fonction) => {
        let i = this.fonctions.findIndex(item => item.id === res.id);
        this.fonctions.splice(i, 1);
        this.fonctionSubject.next(this.fonctions);
        this.fonctionsTrash.push(res);
        this.fonctionTrashSubject.next(this.fonctionsTrash);
      });
  }

  restoreFonction(id) {
    return this.api.post('fonction:restore', id).then(
      (res: Fonction) => {
        let i = this.fonctionsTrash.findIndex(item => item.id === res.id);
        this.fonctionsTrash.splice(i, 1);
        this.fonctionTrashSubject.next(this.fonctionsTrash);
        this.fonctions.push(res);
        this.fonctionSubject.next(this.fonctions);
      });
  }

  /**
  * user
  */

  getUsers() {
    return this.userSubject.asObservable();
  }

  getUsersTrash() {
    return this.userTrashSubject.asObservable();
  }

  getUserTrash(id) {
    return this.usersTrash.find(item => item.id === id);
  }

  getUser(id) {
    return this.users.find(item => item.id === id);
  }

  addUser(data) {
    return this.api.post('user:add', data).then(
      (res: User) => {
        this.users.push(res);
        this.userSubject.next(this.users);
      });
  }

  editUser(data) {
    return this.api.post('user:edit', data).then(
      (res: User) => {
        let i = this.users.findIndex(item => item.id === res.id);
        this.users[i] = res;
        this.userSubject.next(this.users);
      });
  }

  deleteUser(id) {
    return this.api.post('user:delete', id).then(
      (res: User) => {
        let i = this.users.findIndex(item => item.id === res.id);
        this.users.splice(i, 1);
        this.userSubject.next(this.users);
        this.usersTrash.push(res);
        this.userTrashSubject.next(this.usersTrash);
      });
  }
  restoreUser(id) {
    return this.api.post('user:restore', id).then(
      (res: User) => {
        let i = this.usersTrash.findIndex(item => item.id === res.id);
        this.usersTrash.splice(i, 1);
        this.userTrashSubject.next(this.usersTrash);
        this.users.push(res);
        this.userSubject.next(this.users);
      });
  }

  getUserActivities(userId, lastId){
    return this.api.post('user:activites',{userId: userId, lastId: lastId}).then(
      res => res
    );
  }

}
