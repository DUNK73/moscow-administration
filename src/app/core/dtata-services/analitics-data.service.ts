import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Industry, AnaliticsByCountry } from '../../models/industry';
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
          exportSum: 100 * index,

          subIndustry: []

        });

      for (let j = 0; j < 10; j++) {
        result[index].subIndustry.push(
          {
            title: `Подотрасль Отрасл ${j}`,
            exportDataList: [
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
          exportSum: 100 * index,

          subIndustry: []

        });

      for (let j = 0; j < 10; j++) {
        result[index].subIndustry.push(
          {
            title: `Подотрасль Отрасл ${j}`,
            exportDataList: [
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

  public getAnaliticsForApk(): Observable<Array<Industry>> {

    const result: Array<Industry> = [];
    for (let index = 0; index < 20; index++) {
      result.push(
        {
          id: index,
          title: `Отрасль ${index}`,
          exportSum: 100 * index,

          subIndustry: []

        });

      for (let j = 0; j < 10; j++) {
        result[index].subIndustry.push(
          {
            title: `Подотрасль Отрасл ${j}`,
            exportDataList: [
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

  public getAnaliticsForPromByCounties(): Observable<Array<AnaliticsByCountry>> {
    return this.http.get<Array<AnaliticsByCountry>>('api/ehdExportProm/');
  }

  public getAnaliticsForApkByCounties(): Observable<Array<AnaliticsByCountry>> {
    return this.http.get<Array<AnaliticsByCountry>>('api/ehdExportAPK/');
  }

}
