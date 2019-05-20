import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '@app/models/auth/login-model';
import { RegisterModel } from '@app/models/auth/register-model';
import { LoginResponse } from '@app/models/auth/login-response';
import { RegisterResponse } from '@app/models/auth/register-response';

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

  login(credentials: LoginModel): Observable<LoginResponse>
  {
    return this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, credentials);
  }

  register(userData: RegisterModel): Observable<RegisterResponse>
   {
    return this.httpClient.post<RegisterResponse>(`${this.baseUrl}/register`, userData);
  }
}
