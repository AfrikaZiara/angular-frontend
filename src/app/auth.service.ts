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

   signInWithGoogle(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afauth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    
  }

  signInWithFacebook(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afauth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  signInWithGithub(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afauth.auth.signInWithPopup( new firebase.auth.GithubAuthProvider());
  }

  logout(){
    this.afauth.auth.signOut();
  }
}
