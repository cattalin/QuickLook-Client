import { GlobalService } from './../../services/global.service';
import { SearchHit } from './../../models/search-hit';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() searchHit: SearchHit;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  onPreviewClicked(){
    this.globalService.triggerPreviewLink(this.searchHit.url);
    document.getElementById("pulanpizda").click();
  }
}
