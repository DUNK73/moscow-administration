import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Industry, AnaliticsByCountry, SubIndustry } from '../../models/industry';
import { Company } from 'src/app/models/company';
import { map } from '@amcharts/amcharts4/.internal/core/utils/Iterator';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnaliticsDataService {

  constructor(
    private http: HttpClient,
  ) { }


  public getAnalitics(): Observable<Array<Industry>> {

    const result: Array<Industry> = [];
    for (let index = 0; index < 20; index++) {
      result.push(
        {
          id: index,
          title: `Отрасль ${index}`,
          indicator: {
            date: new Date(),
            value: 100 * index
          },

          subIndustries: []

        });

      for (let j = 0; j < 10; j++) {
        result[index].subIndustries.push(
          {
            title: `Подотрасль Отрасл ${j}`,
            indicator: [
              { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
              { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
              { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
            ]
          }

        );
      }
    }

    return of(result);
    // return this.http
  }

  public getAnaliticsForProm(): Observable<Array<Industry>> {

    const result: Array<Industry> = [];
    for (let index = 0; index < 20; index++) {
      result.push(
        {
          id: index,
          title: `Отрасль ${index}`,
          indicator: {
            date: new Date(),
            value: 100 * index
          },

          subIndustries: []

        });

      for (let j = 0; j < 10; j++) {
        result[index].subIndustries.push(
          {
            title: `Подотрасль Отрасл ${j}`,
            indicator: [
              { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
              { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
              { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
            ]
          }

        );
      }
    }

    return of(result);
    // return this.http
  }

  public getApkIndustries(): Observable<Array<Industry>> {
    return this.http.get<Array<Industry>>('api/analitic/apk/industries');
  }
  public getApkSubIndustries(industry: Industry): Observable<Array<SubIndustry>> {
    return this.http.get<Array<SubIndustry>>(`api/analitic/apk/industries/${industry.id}/subindustries`);
  }

  public getAnaliticsForPromByCounties(): Observable<Array<AnaliticsByCountry>> {
    return this.http.get<Array<AnaliticsByCountry>>('api/ehdExportProm/');
  }

  public getAnaliticsForApkByCounties(): Observable<Array<AnaliticsByCountry>> {
    return this.http.get<Array<AnaliticsByCountry>>('api/ehdExportAPK/');
  }


}
