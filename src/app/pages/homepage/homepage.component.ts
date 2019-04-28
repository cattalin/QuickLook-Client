import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onSearchStarted(searchedContent: string) {
    if (searchedContent != null && searchedContent != "") {
      this.router.navigate([`/results`], { queryParams: { searchedContent: searchedContent } })
    }
  }

}
