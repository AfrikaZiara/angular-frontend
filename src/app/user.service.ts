import { AppPage } from './../../e2e/app.po';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase){

  }
  
  save(user:firebase.User){
    this.db.object('/users/'+ user.uid).update({
      name: user.displayName,
      email: user.email,
      isAdmin: false,
      isTourOperator: false,
      isTourist: false
    });
  }

  getAll(){
    return this.db.list('/users');
    
  }

}
