import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  private results;

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getResults()
        .subscribe(results => this.results = results);
  }

  getResults() {
    return this.resultsService.getList();
  }
}
