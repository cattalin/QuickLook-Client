import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Result } from '@app/models/result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input()
  private results: Result[];
  private master: string = 'test';

  constructor() { }

  ngOnInit() {
  }

}
