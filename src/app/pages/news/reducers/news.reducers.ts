import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { NewsActions } from '../action-types';
import { allNewsLoaded } from '../news.actions';
import { NewsPost, compareNewsPosts } from '../../../models/news-post.model';

export interface NewsState extends EntityState<NewsPost> {
  allNewsLoaded: boolean;
}

export const adapter = createEntityAdapter<NewsPost>();

export const initialNewsState = adapter.getInitialState({
  allNewsLoaded: false,
});

export const newsReducer = createReducer(
  initialNewsState,

  on(NewsActions.allNewsLoaded, (state, action) =>
    adapter.setAll(action.news, { ...state, allNewsLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
