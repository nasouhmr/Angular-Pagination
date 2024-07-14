import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Output() pageChange: EventEmitter<{ page: number; perPage: number }> = new EventEmitter<{ page: number; perPage: number }>();

  pageSizes: number[] = [5, 10, 20, 50];
  currentPage: number = 1;
  totalPages: number;
  pages: number[] = [];

  ngOnInit() { 
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.updatePages();
  }

  updatePages() {
    let startPage: number, endPage: number;
    if (this.totalPages <= 5) {
      startPage = 1;
      endPage = this.totalPages;
    } else {
      if (this.currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (this.currentPage + 2 >= this.totalPages) {
        startPage = this.totalPages - 4;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - 2;
        endPage = this.currentPage + 2;
      }
    }

    this.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
  }

  onItemsPerPageChange(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.calculateTotalPages();
    this.pageChange.emit({ page: this.currentPage, perPage: this.itemsPerPage });
  }

  firstPage() {
    if (this.currentPage !== 1) {
      this.currentPage = 1;
      this.updatePages();
      this.pageChange.emit({ page: this.currentPage, perPage: this.itemsPerPage });
    }
  }

  lastPage() {
    if (this.currentPage !== this.totalPages) {
      this.currentPage = this.totalPages;
      this.updatePages();
      this.pageChange.emit({ page: this.currentPage, perPage: this.itemsPerPage });
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePages();
      this.pageChange.emit({ page: this.currentPage, perPage: this.itemsPerPage });
    }
  }

  nextPage() { 
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePages();
      this.pageChange.emit({ page: this.currentPage, perPage: this.itemsPerPage });
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePages();
    this.pageChange.emit({ page: this.currentPage, perPage: this.itemsPerPage });
  }
}
