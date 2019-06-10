import { AdvancedSearchStore } from '@app/services/advanced-search.store.service';
import { AdvancedSearchComponent } from './../../components/advanced-search/advanced-search.component';
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

  lastSearchInput: string = '';
  searchResult: SearchResult;
  searchedContent: string = '';
  currentPage: number;
  loading: boolean = true;
  searchLostFocus: boolean = true;

  suggestions = [];


  constructor(
    private resultsService: SearchResultsService,
    private searchStore: AdvancedSearchStore,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.loading = true;
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
    this.lastSearchInput = searchedContent;
    this.suggestions = [];
    if (this.searchStore.searchQuery.isAdvancedSearch) {
      this.searchStore.searchQuery.searchedContent = this.searchedContent;
      return this.resultsService
        .getAdvancedResults(this.searchStore.searchQuery)
        .subscribe(searchResult => {
          console.log(Math.ceil(searchResult.searchMetadata.total));
          this.loading = false;
          this.searchResult = searchResult
        });
    }
    else {
      return this.resultsService
        .getSimpleResults(searchedContent, this.currentPage)
        .subscribe(searchResult => {
          console.log(Math.ceil(searchResult.searchMetadata.total));

          this.loading = false;
          this.searchResult = searchResult
        });
    }
  }

  getSuggestions(event) {
    if (event.keyCode == 13) {
      this.searchLostFocus = true;
      this.suggestions = [];
      return;
    }
    this.resultsService.getSuggestions(this.searchedContent)
      .subscribe(res => {
        if (!this.searchLostFocus)
          this.suggestions = res;

      });
  }

  selectSuggestion(suggestion) {
    this.searchedContent = suggestion;
    this.getResults(this.searchedContent);
    this.suggestions = [];
  }

  searchLostFocusEv() {
    setTimeout(() => { this.searchLostFocus = true }, 100)
  }




}
