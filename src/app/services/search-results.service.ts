import { SearchResult } from '@app/models/search-result';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  
  constructor(private httpClient: HttpClient) { }

  getList(searchedContent: string): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(`/api/search/simple?searchedContent=${searchedContent}&take=10`)
  }
}