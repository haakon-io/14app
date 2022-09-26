import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewsPost } from '../models/news-post.model';

@Injectable()
export class NewsHttpService {
  constructor(private http: HttpClient) {}

  findAllNews(): Observable<NewsPost[]> {
    return this.http
      .get<NewsPost[]>(
        'https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed'
      )
      .pipe(map((res: NewsPost[]) => res));
  }
}
