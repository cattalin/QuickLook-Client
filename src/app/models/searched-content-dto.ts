
export class SearchedContentDto {
    public take: number;
    public page: number;
    public fuzziness: number;
    public input: string;
    public language: string;
    public isAdvancedSearch: boolean;
    public matchExactWords: boolean;
    public matchExactContent: boolean;
    public matchUncrawledWebsites: boolean;
    public startDate: Date;
    public endDate: Date;
}