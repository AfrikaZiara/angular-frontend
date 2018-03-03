import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(private afauth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = this.afauth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afauth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
    
  }

  logout(){
    this.afauth.auth.signOut();
  }
}
