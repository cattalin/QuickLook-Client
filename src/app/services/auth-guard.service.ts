import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: SessionService, public router: Router) { }
  canActivate(): boolean {
    console.log(this.auth.isLoggedIn())
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['results'])
      return false;
    }
    return true;
  }
}