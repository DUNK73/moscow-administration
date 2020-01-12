/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientsDataService } from './clients-data.service';

describe('Service: ClientsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsDataService]
    });
  });

  it('should ...', inject([ClientsDataService], (service: ClientsDataService) => {
    expect(service).toBeTruthy();
  }));
});
