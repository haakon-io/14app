import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { NewsPost } from '../../models/news-post.model';
import { Observable, map } from 'rxjs';
import { selectAllNews } from './news.selectors';
import { NewsEntityService } from '../../services/news-entity.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsStories$: Observable<NewsPost[]>;
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
}
