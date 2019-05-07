import { SearchedContentDto } from './searched-content-dto';

export class SearchMetadata {
    public total: number;
    public took: number;
    public searchedContent: SearchedContentDto;
}