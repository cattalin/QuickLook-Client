import { Paginator } from './../../models/paginator';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChanged = new EventEmitter<number>();
  @Input() totalPages: number;
  private paginator: Paginator;
  constructor() { }

  ngOnInit() {
    this.paginator = new Paginator();
    this.paginator.pages = [1, 2, 3, 4, 5];
    this.paginator.currentPage = 1;
    this.paginator.totalPages = 5;
  }

  setPage(newCurrentPage) {
    console.log(newCurrentPage)
    this.pageChanged.emit(newCurrentPage);
    this.recalculatePages(newCurrentPage);
    this.paginator.currentPage = newCurrentPage;
  }

  recalculatePages(newCurrentPage) {
    if (newCurrentPage > this.paginator.pages[2]) {
      this.paginator.pages.shift();

      if (this.paginator.pages[3] < this.totalPages) {
        this.paginator.pages.push(this.paginator.pages[3] + 1);
      }
    }
    else if (newCurrentPage < this.paginator.pages[2]) {

      if (this.paginator.pages[0] > 1) {
        this.paginator.pages.pop();
        this.paginator.pages.unshift(this.paginator.pages[0] - 1);
      }
    }
  }
}
