import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class MockedDataService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    let results = [
      new Result(1, "title1", "desc desc desc desc desc desc desc desc desc desc", ["highlight<b>found here</b> asdasda"], "url1"),
      new Result(2, "title2", "desc desc desc desc desc desc desc desc desc desc", ["highlight<b>found here</b> asdasda"], "url2"),
      new Result(3, "title3", "desc desc desc desc desc desc desc desc desc desc", ["highlight<b>found here</b> asdasda"], "url3"),
      new Result(4, "title4", "desc desc desc desc desc desc desc desc desc desc", ["highlight<b>found here</b> asdasda"], "url4"),
    ];

    return { results };
  }
}
