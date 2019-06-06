import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  fuzziness: number = 1; // [0-5]
  showAdvanced: boolean = false;
  languages = [
    {
      id: 1,
      name: 'English'
    },
    {
      id: 2,
      name: 'Français'
    },
    {
      id: 3,
      name: 'Deutsch'
    },
    {
      id: 4,
      name: 'Română'
    }
  ];
  selectedLanguage = null;

  constructor() { }

  ngOnInit() {
    this.selectedLanguage = this.languages[0];
  }

  increaseFuziness() {
    this.fuzziness = this.fuzziness === 5 ? this.fuzziness : this.fuzziness + 1;
  }

  decreaseFuzziness() {
    this.fuzziness = this.fuzziness === 0 ? this.fuzziness : this.fuzziness - 1;
  }

}
