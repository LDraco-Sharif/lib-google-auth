import { TestBed } from '@angular/core/testing';

import { NgsGoogleAuthService } from './ngs-google-auth.service';

describe('NgsGoogleAuthService', () => {
  let service: NgsGoogleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgsGoogleAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
