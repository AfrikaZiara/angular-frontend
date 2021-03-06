import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private userService: UserService, auth: AuthService, router: Router){
    auth.user$.subscribe(user => {

      if(!user) return
      userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');

      if(!returnUrl) return
      localStorage.removeItem(returnUrl)
      router.navigateByUrl(returnUrl)
    });

  }
}
