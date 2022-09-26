import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { NewsPost, compareNewsPosts } from './models/news-post.model';

const entityMetadata: EntityMetadataMap = {
  NewsPost: {
    sortComparer: compareNewsPosts,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
