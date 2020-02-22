import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl(),
    }
  );

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {

    const autenticationData = this.form.value;

    this.authenticationService
      .login(autenticationData.username, autenticationData.password)
      .subscribe();
  }

}
