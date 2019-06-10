import { SearchResult } from '@app/models/search-result';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchAdvancedQuery } from '@app/models/search-advanced-query';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private httpClient: HttpClient) { }

  getSimpleResults(searchedContent: string, page: number): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(`/api/search/simple?searchedContent=${searchedContent}&take=10&page=${page > 0 ? page : 1}`)
  }

  getAdvancedResults(searchQuery: SearchAdvancedQuery): Observable<SearchResult> {
    return this.httpClient.post<SearchResult>(`/api/search/advanced`, searchQuery)
  }

  getSuggestions(searchedContent: string): any {
    return this.httpClient.get(`api/suggestions/completion?=${searchedContent}`);
  }

  newBookmark(data) {
    return this.httpClient.post(`/api/bookmarks`, data)
  }

  getBookmarks(): any {
    return this.httpClient.get(`/api/bookmarks`);
  }

}
