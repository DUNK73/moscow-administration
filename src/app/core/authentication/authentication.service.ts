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

  public isLogin(): boolean {
    return !!this.token;
  }

  private _token: string;

  public get token() {
    if (this._token) {
      return this._token;
    }
    return this._token = sessionStorage.getItem('token');
  }

  public set token(value: string) {
    this._token = value;
    sessionStorage.setItem('token', value);
  }

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
          this.router.navigate(['main']);
        })
      );
  }


}
