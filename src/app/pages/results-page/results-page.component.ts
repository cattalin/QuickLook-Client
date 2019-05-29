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
  currentPage: number;
  loading: boolean = true;

  constructor(
    private resultsService: SearchResultsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchedContent = params.searchedContent;
      this.getResults(this.searchedContent);
    });
  }

  onSearchStarted(searchedContent: string) {
    if (searchedContent != null && searchedContent != "") {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { searchedContent: searchedContent },
        queryParamsHandling: "merge",
      })

      this.getResults(searchedContent);
    }
  }

  onPageChanged(newPage: number) {
    this.currentPage = newPage;
    this.getResults(this.searchedContent);
  }

  getResults(searchedContent: string) {
    this.loading = true;
    return this.resultsService
      .getList(searchedContent, this.currentPage)
      .subscribe(searchResult => {
        console.log(Math.ceil(searchResult.searchMetadata.total));
        this.loading = false;
        this.searchResult = searchResult
      });
  }
}
