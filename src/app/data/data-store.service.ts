import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let  products= [
      { id: 1, name: 'Dettol', rate: 30, releasedDate:new Date('10-Nov-2000'),category:'A' },
      { id: 2, name: 'Cinthol', rate: 40 , releasedDate:new Date('20-Apr-2012'),category:'B'},
      { id:3, name: 'Lifeboy', rate: 50 , releasedDate:new Date('18-Feb-2015'),category:'C'},
      { id: 4, name: 'Dove', rate: 60, releasedDate:new Date('12-Jan-2018'),category:'A' }
    ]
    return {products};
  }
}
