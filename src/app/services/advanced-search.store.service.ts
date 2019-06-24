import { observable, action } from 'mobx-angular';
import { SearchAdvancedQuery } from '@app/models/search-advanced-query';
import { Injectable } from '@angular/core';

@Injectable()
export class AdvancedSearchStore {
    @observable searchQuery: SearchAdvancedQuery;

    constructor() {
        this.searchQuery = new SearchAdvancedQuery();
        this.searchQuery.language = 'en';
        this.searchQuery.fuzziness = 1;
        this.searchQuery.isAdvancedSearch = false;
        this.searchQuery.matchExactSentence = false;
        this.searchQuery.matchExactWords = false;
        this.searchQuery.page = 1;
        this.searchQuery.take = 10;
    }

    @action toggleAdvancedSearch() {
        this.searchQuery.isAdvancedSearch = !this.searchQuery.isAdvancedSearch;
    }

    @action toggleMatchExactWords() {
        this.searchQuery.matchExactWords = !this.searchQuery.matchExactWords;
        if (this.searchQuery.matchExactWords) {
            this.searchQuery.fuzziness = 0;
        }
    }

    @action toggleMatchExactSentence() {
        this.searchQuery.matchExactSentence = !this.searchQuery.matchExactSentence;
    }

    @action updateLanguage(newLanguage) {
        this.searchQuery.language = newLanguage.key;
    }

    @action updateCurrentPage(newPage) {
        this.searchQuery.page = newPage;
    }

    @action increaseFuziness() {
        this.searchQuery.fuzziness = this.searchQuery.fuzziness === 5 ? this.searchQuery.fuzziness : this.searchQuery.fuzziness + 1;
    }

    @action decreaseFuzziness() {
        this.searchQuery.fuzziness = this.searchQuery.fuzziness === 0 ? this.searchQuery.fuzziness : this.searchQuery.fuzziness - 1;
    }
}