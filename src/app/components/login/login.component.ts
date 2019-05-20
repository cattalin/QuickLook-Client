import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { SessionService } from '@app/services/session.service';
import { LoginModel } from '@app/models/auth/login-model';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    
  }

  login() {
    let loginModel = new LoginModel()
    loginModel.username = this.username;
    loginModel.password = this.password;
    
    this.authService.login(loginModel).subscribe(
      res => {
        document.getElementById("login-modal-close").click();
        this.toastr.success(res.status);
        this.sessionService.setToken(res.token, true);
        // this.authService.getProfile().subscribe(profile => {
        //   this.sessionService.setCurrentUser(profile);
        //   // this.router.navigateByUrl(this.returnUrl);
        // })
    }, 
      err => {
        this.toastr.error("Register failed");
    });
  }
}
