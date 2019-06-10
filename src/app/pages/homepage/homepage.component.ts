import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomePageComponent implements OnInit {

  searchedContent: string = '';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onSearchStarted() {
    if (this.searchedContent != null && this.searchedContent != "") {
      this.router.navigate([`/results`], { queryParams: { searchedContent: this.searchedContent } })
    }
  }

}
