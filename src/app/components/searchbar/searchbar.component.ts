import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from '@app/services/search-results.service';
import { AdvancedSearchStore } from '@app/services/advanced-search.store.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  ngOnInit() {
  }

}
