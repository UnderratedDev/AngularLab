import { TestBed, inject } from '@angular/core/testing';

import { CartoonCharacterService } from './cartoon-character.service';

describe('CartoonCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartoonCharacterService]
    });
  });

  it('should be created', inject([CartoonCharacterService], (service: CartoonCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
