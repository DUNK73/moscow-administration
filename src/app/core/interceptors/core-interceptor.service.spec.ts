/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoreInterceptorService } from './core-interceptor.service';

describe('Service: CoreInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreInterceptorService]
    });
  });

  it('should ...', inject([CoreInterceptorService], (service: CoreInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
