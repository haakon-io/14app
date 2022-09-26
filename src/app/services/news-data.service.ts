import { NewsPost } from '../models/news-post.model';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsDataService extends DefaultDataService<NewsPost> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('NewsPost', http, httpUrlGenerator);
  }

  override getAll(): Observable<NewsPost[]> {
    return this.http
      .get<NewsPost[]>(
        'https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed'
      )
      .pipe(map((res) => res));
  }
}
