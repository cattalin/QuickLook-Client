import { SearchResult } from '@app/models/search-result';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultsService } from '@app/services/search-results.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {

  private searchResult: SearchResult;
  private searchedContent: string;

  constructor(
    private resultsService: SearchResultsService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.searchedContent = params.searchedContent;
        this.getResults(this.searchedContent)
          .subscribe(searchResult => {
            console.log(searchResult)
            this.searchResult = searchResult}
            );
      });

  }

  getResults(searchedContent: string) {
    return this.resultsService.getList(this.searchedContent || "");
  }
}
