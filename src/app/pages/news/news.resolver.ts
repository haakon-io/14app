import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { filter, first, map, tap } from 'rxjs/operators';
import { NewsEntityService } from '../../services/news-entity.service';

@Injectable()
export class NewsResolver implements Resolve<boolean> {
  constructor(private newsService: NewsEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.newsService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.newsService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
