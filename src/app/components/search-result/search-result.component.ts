import { Component, OnInit, Input } from '@angular/core';
import { Result } from '@app/models/result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() result: Result;

  constructor() { }

  ngOnInit() {
  }

}
