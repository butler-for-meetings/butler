/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ButlerApiService } from './butler-api.service';

describe('Service: ButlerApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButlerApiService]
    });
  });

  it('should ...', inject([ButlerApiService], (service: ButlerApiService) => {
    expect(service).toBeTruthy();
  }));
});
