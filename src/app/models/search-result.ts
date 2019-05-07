import { SearchMetadata } from './search-metadata';
import { SearchHit } from './search-hit';
import { SearchPagination } from './search-pagination';

export class SearchResult {
    public searchHits: SearchHit[];
    public searchMetadata: SearchMetadata;
    public searchPagination: SearchPagination;
}