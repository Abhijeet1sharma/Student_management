import { TestBed } from '@angular/core/testing';

import { GenerateInfoService } from './generate-info.service';

describe('GenerateInfoService', () => {
  let service: GenerateInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
