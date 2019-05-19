import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SessionService {

  private currentUser: any = null;

  constructor(
    private router: Router
  ) { }

  public setToken(token, rememberMe) {
    if(rememberMe) window.localStorage['auth-token'] = token;
    else window.sessionStorage['auth-token'] = token;
  }

  public isLoggedIn() {
    return window.localStorage['auth-token'] ||  window.sessionStorage['auth-token'];
  }

  public setCurrentUser(user) {
    this.currentUser = user;
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public logout() {
    this.currentUser = null;
    window.localStorage.removeItem('auth-token');
    window.sessionStorage.removeItem('auth-token');
    // this.router.navigate(['/login']);
  }
}