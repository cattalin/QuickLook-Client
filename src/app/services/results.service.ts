import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '@app/models/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  SERVER_URL: string = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }

  getList(searchedContent: string): Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${this.SERVER_URL}/results`)
  }
}
