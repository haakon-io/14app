import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState } from './reducers/news.reducers';
import * as fromNews from './reducers/news.reducers';

export const selectNewsState = createFeatureSelector<NewsState>('news');

export const selectAllNews = createSelector(
  selectNewsState,
  fromNews.selectAll
);
