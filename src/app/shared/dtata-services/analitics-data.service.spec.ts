/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnaliticsDataService } from './analitics-data.service';

describe('Service: AnaliticsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnaliticsDataService]
    });
  });

  it('should ...', inject([AnaliticsDataService], (service: AnaliticsDataService) => {
    expect(service).toBeTruthy();
  }));
});
