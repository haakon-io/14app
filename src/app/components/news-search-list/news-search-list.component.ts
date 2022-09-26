import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsPost } from '../../models/news-post.model';

@Component({
  selector: 'news-search-list',
  templateUrl: './news-search-list.component.html',
  styleUrls: ['./news-search-list.component.scss'],
})
export class NewsSearchListComponent implements OnInit {
  @Input()
  searchResults: NewsPost[];
  @Output() closeSearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('NewsSearchList', this.searchResults.length);
  }

  closeSearchResults() {
    this.closeSearch.emit(true);
  }
}
