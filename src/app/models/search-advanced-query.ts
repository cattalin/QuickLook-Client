
export class SearchAdvancedQuery {
    public isAdvancedSearch: boolean;
    public matchExactWords: boolean;
    public matchExactSentence: boolean;
    public matchUncrawledWebsites: boolean;

    public fuzziness: number;
    public language: string;
    public searchedContent: string;

    public page: number;
    public take: number;
    // public DateTime StartDate { get; set; }
    // public DateTime EndDate { get; set; }
}