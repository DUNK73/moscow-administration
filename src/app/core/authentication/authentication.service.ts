import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public isLogin: boolean = false;

  constructor(
    private router: Router
  ) {

  }

  public login(arg0: string, arg1: string) {
    this.isLogin = true;
    this.router.navigate(['main']);
  }

}
