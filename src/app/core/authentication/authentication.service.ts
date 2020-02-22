import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class TokenData {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLogin = false;
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  public login(username: string, password: string): Observable<TokenData> {

    // "username":"oem","password":"Cnfhnfg!",

    return this.http.post<any>(`api-token-auth/`, {
      username,
      password,
      rememberMe: false
    })
      .pipe(
        tap((tokenData: TokenData) => {
          this.token = tokenData.token;

          this.isLogin = true;
          this.router.navigate(['main']);
        })
      );
  }

}
