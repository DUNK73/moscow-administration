/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComaniesDataService } from './comanies-data.service';

describe('Service: ComaniesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComaniesDataService]
    });
  });

  it('should ...', inject([ComaniesDataService], (service: ComaniesDataService) => {
    expect(service).toBeTruthy();
  }));
});
