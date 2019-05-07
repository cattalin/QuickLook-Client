import { SearchedContentDto } from './../models/searched-content-dto';
import { SearchMetadata } from './../models/search-metadata';
import { SearchPagination } from './../models/search-pagination';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { SearchHit } from '../models/search-hit';
import { SearchResult } from '@app/models/search-result';

@Injectable({
  providedIn: 'root'
})
export class MockedDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    var searchHit1 = new SearchHit();
    searchHit1.id = 1;
    searchHit1.title = "title1";
    searchHit1.description = "desc desc desc desc desc desc desc desc desc desc";
    searchHit1.highlights = ["highlight<b>found here</b> asdasda"];
    searchHit1.url = "url1";

    var searchHit2 = new SearchHit();
    searchHit2.id = 2;
    searchHit2.title = "title2";
    searchHit2.description = "desc desc desc desc desc desc desc desc desc desc";
    searchHit2.highlights = ["highlight<b>found here</b> asdasda"];
    searchHit2.url = "url2";

    var searchHit3 = new SearchHit();
    searchHit3.id = 3;
    searchHit3.title = "title3";
    searchHit3.description = "desc desc desc desc desc desc desc desc desc desc";
    searchHit3.highlights = ["highlight<b>found here</b> asdasda"];
    searchHit3.url = "url3";

    var searchHits = [searchHit1, searchHit2, searchHit3];

    var searchPagination = new SearchPagination();
    searchPagination.from = 0;
    searchPagination.page = 1;
    searchPagination.take = 3;

    var searchedContentDto = new SearchedContentDto();
    searchedContentDto.input = "asd";
    searchedContentDto.language = "en";
    searchedContentDto.isAdvancedSearch = false;
    searchedContentDto.page = 1;
    searchedContentDto.take = 3;

    var searchMetadata = new SearchMetadata();
    searchMetadata.searchedContent = searchedContentDto;
    searchMetadata.took = 365;
    searchMetadata.total = 123123365;

    var searchResult = new SearchResult();
    searchResult.searchHits = searchHits;
    searchResult.searchMetadata = searchMetadata;
    searchResult.searchPagination = searchPagination;

    return searchResult;
  }
}
