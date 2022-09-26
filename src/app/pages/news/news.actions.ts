import { createAction, props } from '@ngrx/store';
import { NewsPost } from '../../models/news-post.model';

export const loadAllNews = createAction('[News Resolver] Load All News');

export const allNewsLoaded = createAction(
  '[Load News Effect] All News Loaded',
  props<{ news: NewsPost[] }>()
);
