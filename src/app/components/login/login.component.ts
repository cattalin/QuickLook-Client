import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { SessionService } from '@app/services/session.service';
import { LoginModel } from '@app/models/auth/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  username: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
  }

  login() {
    let loginModel = new LoginModel()
    loginModel.username = this.username;
    loginModel.password = this.password;

    this.authService.login(loginModel).subscribe(res => {
      document.getElementById("modal-close").click();
    // this.sessionService.setToken(res.access_token, this.rememberMe.value);
      // this.authService.getProfile().subscribe(profile => {
      //   this.sessionService.setCurrentUser(profile);
      //   this.router.navigateByUrl(this.returnUrl);
      // })
    });
  }
}
