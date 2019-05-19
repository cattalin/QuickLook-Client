import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '@app/models/auth/login-model';
import { RegisterModel } from '@app/models/auth/register-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly baseUrl = 'api/auth';

  constructor(
    private httpClient: HttpClient
  ) { }

  getProfile() {
    return this.httpClient.get(`${this.baseUrl}/userInfo`);
  }

  login(credentials: LoginModel) {
    return this.httpClient.post(`${this.baseUrl}/login`, credentials);
  }

  register(userData: RegisterModel) {
    return this.httpClient.post(`${this.baseUrl}/register`, userData);
  }
}
