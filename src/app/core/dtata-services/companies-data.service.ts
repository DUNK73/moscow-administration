import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Company } from '../../models/company';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im9lbSIsImV4cCI6MTYxMDM4MzE2NCwiZW1haWwiOiJpbmZvQHN5YmVyY2F0LnJ1In0.x1JFx33Vql0p_McnVcexYnk4d2D0KFdrqKxOngBE8m4';

  constructor(
    private http: HttpClient,
  ) { }


  public getCompanies(): Observable<Array<Company>> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('zumo-api-version', '2.0.0');

    // return this.http.post<any>('api-login/api-token-auth/', {});
    // return this.http.get<any>('rest/common/artifact');
    return this.http.get<Array<Company>>('api/companies', {
      headers: headers
    }) as any;

  }

}
