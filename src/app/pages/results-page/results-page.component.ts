import { Component, OnInit } from '@angular/core';
import { Result } from '@app/models/result';
import { ResultsService } from '@app/services/results.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  private results: Result[];
  private searchedContent: string;

  constructor(
    private resultsService: ResultsService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.searchedContent = params.searchedContent;
        this.getResults(this.searchedContent)
          .subscribe(results => this.results = results);
      });

  }

  getResults(searchedContent: string) {
    return this.resultsService.getList(this.searchedContent || "");
  }
}
