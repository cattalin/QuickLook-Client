import { Component, OnInit } from '@angular/core';
import { Result } from '@app/models/result';
import { ResultsService } from '@app/services/results.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  private results: Result[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getResults()
        .subscribe(results => this.results = results);
  }

  getResults() {
    return this.resultsService.getList();
  }
}
