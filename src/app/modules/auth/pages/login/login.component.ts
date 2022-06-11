import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../../core/services';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.service.login().subscribe(() => this.router.navigate(['/']));
  }
}
