import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Industry } from '../../models/industry';

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

}
