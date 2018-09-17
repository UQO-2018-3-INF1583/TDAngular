import { TestBed, inject } from '@angular/core/testing';

import { HerosService } from './heros.service';
import {Heros} from './heros';
import { HEROS } from './mock-heros';

describe('HerosService', () => {
  let service: HerosService;
  /*const HEROS: Heros[] = [
    { id: 11, nom: 'Mr. Nice' },
    { id: 1, nom: 'Windstorm'},
    { id: 15, nom: 'Magneta'},
  ];*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerosService]
    });
  });

  it('should be created', inject([HerosService], (service: HerosService) => {
    expect(service).toBeTruthy();
  }));

  it('getHeros should return mock-heros content', () => {
    service = TestBed.get(HerosService);
    expect(service.getHeros()).toBeTruthy(HEROS);
  });
});

describe('More HerosService', () => {
  let service: HerosService;
  /*const HEROS: Heros[] = [
    { id: 11, nom: 'Mr. Nice' },
    { id: 1, nom: 'Windstorm'},
    { id: 15, nom: 'Magneta'},
  ];*/
  beforeEach(() => { service = new HerosService(); });

  it('getHeros should return mock-heros content', () => {
    expect(service.getHeros()).toBeTruthy(HEROS);
  });
});
