import { Injectable } from '@angular/core';
import { Result } from '../models/result';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  getList(){
    return of([
      new Result( "title1", "url1" ),
      new Result( "title2", "url2" ),
      new Result( "title3", "url3" ),
    ])
  }
}
