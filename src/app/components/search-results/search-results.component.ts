import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchHit } from '@app/models/search-hit';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input()
  private searchHits: SearchHit[];
  private master: string = 'test';

  constructor() { }

  ngOnInit() {
  }

}
