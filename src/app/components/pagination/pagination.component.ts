import { Paginator } from './../../models/paginator';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChanged = new EventEmitter<number>();
  private paginator: Paginator;
  constructor() { }

  ngOnInit() {
    this.paginator = new Paginator();
    this.paginator.pages = [1, 2, 3, 4, 5];
    this.paginator.currentPage = 1;
    this.paginator.totalPages = 5;
  }

  setPage(newCurrentPage){
    this.paginator.currentPage = newCurrentPage;
    this.pageChanged.emit(newCurrentPage);
  }

}
