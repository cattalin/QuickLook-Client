import { SessionService } from './../../services/session.service';
import { AuthenticationService } from '@app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '@app/models/auth/register-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(
    private authenticationService: AuthenticationService,
    private sessionService: SessionService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  register(){
    let data = new RegisterModel();
    data.username = this.username;
    data.password = this.password;
    data.email = this.email;
    
    this.authenticationService.register(data).subscribe(
      res => {
        document.getElementById("register-modal-close").click();
        this.toastr.success(res.status);
        this.sessionService.setToken(res.token, true);
    }, 
      err => {
      this.toastr.error("Register failed");
    })
  }

}
