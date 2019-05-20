import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchedContent: string;
  @Output() searchStarted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.searchedContent)
    this.searchStarted.emit(this.searchedContent);
  }
  
}
