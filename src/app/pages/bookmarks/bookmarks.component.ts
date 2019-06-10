import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '@app/services/search-results.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks = [];
  loading: boolean = true;

  constructor(
    private resultsService: SearchResultsService
  ) { }

  ngOnInit() {
    this.resultsService.getBookmarks().subscribe(res => {
      this.bookmarks = res;
      this.loading = false;
    })
  }

}
