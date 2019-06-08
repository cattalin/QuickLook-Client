
export class SearchAdvancedQuery {
    public isAdvancedSearch: boolean;
    public matchExactWords: boolean;
    public matchExactContent: boolean;
    public matchUncrawledWebsites: boolean;

    public fuzziness: number;
    public language: string;

    // public DateTime StartDate { get; set; }
    // public DateTime EndDate { get; set; }
}