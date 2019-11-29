import { TestBed } from '@angular/core/testing';

import { AngularOntouchService } from './angular-ontouch.service';

describe('AngularOntouchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularOntouchService = TestBed.get(AngularOntouchService);
    expect(service).toBeTruthy();
  });
});
