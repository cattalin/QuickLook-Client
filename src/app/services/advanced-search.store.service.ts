import { observable, action } from 'mobx-angular';
import { SearchAdvancedQuery } from '@app/models/search-advanced-query';
import { Injectable } from '@angular/core';
import { Languages } from '@app/utils/languages';

@Injectable()
export class AdvancedSearchStore {
    @observable searchQuery: SearchAdvancedQuery;

    constructor() {
        this.searchQuery = new SearchAdvancedQuery();
        this.searchQuery.language = 'en';
        this.searchQuery.fuzziness = 1;
        this.searchQuery.isAdvancedSearch = false;
        this.searchQuery.matchExactContent = false;
        this.searchQuery.matchExactWords = false;
    }

    @action toggleAdvancedSearch() {
        this.searchQuery.isAdvancedSearch = !this.searchQuery.isAdvancedSearch;
    }

    @action toggleMatchExactWords() {
        this.searchQuery.matchExactWords = !this.searchQuery.matchExactWords;
    }

    @action toggleMatchExactSentence() {
        this.searchQuery.matchExactContent = !this.searchQuery.matchExactContent;
    }

    @action updateLanguage(newLanguage) {
        this.searchQuery.language = newLanguage.key;
    }

    @action increaseFuziness() {
        this.searchQuery.fuzziness = this.searchQuery.fuzziness === 5 ? this.searchQuery.fuzziness : this.searchQuery.fuzziness + 1;
    }

    @action decreaseFuzziness() {
        this.searchQuery.fuzziness = this.searchQuery.fuzziness === 0 ? this.searchQuery.fuzziness : this.searchQuery.fuzziness - 1;
    }
}