import { SessionService } from '@app/services/session.service';
import { GlobalService } from './../../services/global.service';
import { SearchHit } from './../../models/search-hit';
import { Component, OnInit, Input } from '@angular/core';
import { SearchResultsService } from '@app/services/search-results.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() searchHit: SearchHit;
  @Input() bookmarked: boolean = false;

  constructor(
    private globalService: GlobalService,
    private resultsService: SearchResultsService,
    public sessionService: SessionService,
  ) { }

  ngOnInit() {
  }

  onPreviewClicked() {
    this.globalService.triggerPreviewLink(this.searchHit.url);
    document.getElementById("trigger-preview-modal").click();
  }

  newBookmark() {
    if (this.bookmarked) {
      this.bookmarked = false;
      return;
    }

    this.resultsService.newBookmark(this.searchHit).subscribe(res => {
      console.log("Bookmarked!")
      this.bookmarked = true;
    })
  }
}
