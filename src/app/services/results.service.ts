import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  SERVER_URL: string = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get(`${this.SERVER_URL}/results`);
  }
}
