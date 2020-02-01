import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Industry, AnaliticsByCountry, SubIndustry, Indicator } from '../../models/industry';
import { Company } from 'src/app/models/company';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnaliticsDataService {

  constructor(
    private http: HttpClient,
  ) { }

  private correctIndicator(data: { [key: string]: any }) {
    if (!data) {
      return null;
    }
    return {
      ...data,
      value: data.volume
    } as Indicator;
  }

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
    return this.http.get<Array<Industry>>('api/analitic/apk/industries')
      .pipe(
        map(data => {
          return data.map(item => {
            return {
              ...item,
              indicator: this.correctIndicator(item.indicator[(item.indicator as any as Array<Indicator>).length - 1]),
              // value: (item as any).volume,
            };
          });
        })
      );
  }
  public getApkSubIndustries(industry: Industry): Observable<Array<SubIndustry>> {
    return this.http.get<Array<SubIndustry>>(`api/analitic/apk/industries/${industry.id}/subindustries`)
      .pipe(
        map(data => {
          return data.map(item => {
            return {
              ...item,
              indicator: item.indicator.map(this.correctIndicator),
            };
          });
        })
      );
  }

  public getAnaliticsForPromByCounties(): Observable<Array<AnaliticsByCountry>> {
    return this.http.get<Array<AnaliticsByCountry>>('api/ehdExportProm/');
  }

  public getAnaliticsForApkByCounties(): Observable<Array<AnaliticsByCountry>> {
    return this.http.get<Array<AnaliticsByCountry>>('api/ehdExportAPK/');
  }


}
