import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import 'rxjs/add/operator/map';
import { SnapshotAction } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor( private auth: AuthService, private router: Router ) { }

  canActivate( router, state: RouterStateSnapshot){
    return this.auth.user$.map( user =>{
      if(user) return true

      this.router.navigate(['/login'], { queryParams:{ returnUrl: state.url }});
      return false;
    });
  }
 
}
