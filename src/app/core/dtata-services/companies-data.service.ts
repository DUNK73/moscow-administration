import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Company } from 'src/app/models/company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im9lbSIsImV4cCI6MTYxMDM4MzE2NCwiZW1haWwiOiJpbmZvQHN5YmVyY2F0LnJ1In0.x1JFx33Vql0p_McnVcexYnk4d2D0KFdrqKxOngBE8m4';


  public companies: Array<Company>;

  constructor(
    private http: HttpClient,
  ) { }


  public getCompanies(): Observable<Array<Company>> {

    if (this.companies) {
      return of(this.companies);
    }

    let headers: HttpHeaders = new HttpHeaders();

    // return this.http.post<any>('api-login/api-token-auth/', {});
    // return this.http.get<any>('rest/common/artifact');
    return this.http.get<Array<Company>>('api/companies')
      .pipe(
        map(x => {
          return x.map((item, index) => {
            return {
              ...item,
              id: index
            }
          });
        }),
        tap(x => {
          this.companies = x;
        })
      );

  }

  public getCompany(id: number): Observable<Company> {

    return this.getCompanies()
      .pipe(
        map(x => {
          return x.find(y => y.id === id);
        })
      );

  }

}
