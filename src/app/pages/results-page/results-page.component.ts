import { SearchResult } from '@app/models/search-result';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultsService } from '@app/services/search-results.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {

  searchResult: SearchResult;
  searchedContent: string;

  constructor(
    private resultsService: SearchResultsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchedContent = params.searchedContent;
      this.getResults(this.searchedContent)
        .subscribe(searchResult => {
          this.searchResult = searchResult
        });
    });
  }

  onSearchStarted(searchedContent: string) {
    if (searchedContent != null && searchedContent != "") {
      this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { searchedContent: searchedContent }, 
          queryParamsHandling: "merge", 
      })
      
      this.getResults(searchedContent)
        .subscribe(searchResult => {
          this.searchResult = searchResult
      });
    }
  }

  getResults(searchedContent: string) {
    return this.resultsService.getList(searchedContent);
  }
}
