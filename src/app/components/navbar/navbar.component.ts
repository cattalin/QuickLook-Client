import { SessionService } from '@app/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
    public sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  showLogin() {
    document.getElementById('login-trigger').click();
  }

  showRegister() {
    document.getElementById('register-trigger').click();
  }
}
