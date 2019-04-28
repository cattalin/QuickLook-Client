import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Result } from '@app/models/result';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

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
