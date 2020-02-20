import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchValue:string = '';
  private userSubject = new BehaviorSubject<User>(null);

  constructor() {

  }

  setUser(user){
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }
}
