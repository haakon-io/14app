import { NewsPost } from '../models/news-post.model';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsEntityService extends EntityCollectionServiceBase<NewsPost> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('NewsPost', serviceElementsFactory);
  }
}
