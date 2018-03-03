import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private auth: AuthService) { }

  signInWithGoogle(){
    this.auth.signInWithGoogle();
  }

  signInWithFacebook() {
    this.auth.signInWithFacebook();
  }

  signInWithGithub(){
    this.auth.signInWithGithub();
  }

}
