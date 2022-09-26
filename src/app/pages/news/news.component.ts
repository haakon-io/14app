import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { NewsPost } from '../../models/news-post.model';
import { Observable, map } from 'rxjs';
import { selectAllNews } from './news.selectors';
import { NewsEntityService } from '../../services/news-entity.service';
import FuzzySearch from 'fuzzy-search';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsStories$: Observable<NewsPost[]>;
  searchResults: NewsPost[] = [];
  pageIndex: number = 1;
  searchValue: string = '';
  @Input()
  searchActive: boolean = false;

  constructor(private newsService: NewsEntityService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.newsStories$ = this.newsService.entities$.pipe(
      map((newsPosts: NewsPost[]) => newsPosts)
    );
  }

  searchPosts(searchTerm: string) {
    console.log('searchpost() triggered', searchTerm);

    this.searchActive = true;
    this.newsStories$.subscribe((result) => {
      this.searchResults = result as NewsPost[];
    });
    const searcher = new FuzzySearch(this.searchResults, ['title.rendered'], {
      caseSensitive: false,
    });
    this.searchResults = searcher.search(searchTerm);
  }

  backToAllPosts() {
    this.searchActive = false;
    this.searchValue = '';
  }

  pageIndexChange($event: any) {
    this.pageIndex = $event;
  }
}
