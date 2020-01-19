import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {

  constructor(
    private http: HttpClient,
  ) { }


  public getClients(): Observable<Array<Client>> {

    const clients: Array<Client> = [];
    for (let index = 0; index < 20; index++) {
      clients.push(
        {
          id: index,
          title: `Компания ${index}`,
          turnoverSum: 150 * index,
          exportSum: 100 * index,

          description: `description ${index}`,

          segment: `segment ${index}`,
          industry: `industry ${index}`,
          product: `product ${index}`,

          contactPerson: {
            fio: `fio ${index}`,
            position: `position ${index}`
          }
        }
      );
    }

    return of(clients);
    // return this.http
  }

}
