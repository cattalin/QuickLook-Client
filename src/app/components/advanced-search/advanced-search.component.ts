import { Component, OnInit } from '@angular/core';
import { AdvancedSearchStore } from '@app/services/advanced-search.store.service';
import { Languages } from '@app/utils/languages';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  selectedLanguage = null;
  languages = null;

  constructor(private searchStore: AdvancedSearchStore) { }

  ngOnInit() {
    this.languages = Languages;
    this.selectedLanguage = Languages[0];
  }

  updateLanguage(newSelection) {
    this.selectedLanguage = newSelection;
    this.searchStore.updateLanguage(newSelection);
  }
}
