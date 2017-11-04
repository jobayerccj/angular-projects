import { TestBed, inject } from '@angular/core/testing';

import { AdminauthguardService } from './adminauthguard.service';

describe('AdminauthguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminauthguardService]
    });
  });

  it('should be created', inject([AdminauthguardService], (service: AdminauthguardService) => {
    expect(service).toBeTruthy();
  }));
});
