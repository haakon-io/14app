import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NgZorroAntdModule } from './shared/ngzorro.module';
import { AboutComponent } from './pages/about/about.component';
import { CodeComponent } from './pages/code/code.component';
import { FoodComponent } from './pages/food/food.component';
import { TravelComponent } from './pages/travel/travel.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PlaceComponent } from './pages/travel/place/place.component';
import { NewsHttpService } from './services/news-http.service';
import { LoadingService } from './components/loading/loading.service';
import { MessagesService } from './components/messages/messages.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { NewsResolver } from './pages/news/news.resolver';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { Router, RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { newsReducer } from './pages/news/reducers/news.reducers';
import { NewsEffects } from './pages/news/news.effects';
import {
  EntityDataModule,
  EntityDataService,
  EntityDefinition,
  EntityDefinitions,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { NewsEntityService } from './services/news-entity.service';
import { NewsDataService } from './services/news-data.service';
import { NewsPost, compareNewsPosts } from './models/news-post.model';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

const entityMetadata: EntityMetadataMap = {
  NewsPost: {
    sortComparer: compareNewsPosts,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    CodeComponent,
    FoodComponent,
    TravelComponent,
    LoadingComponent,
    MessagesComponent,
    PlaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: false,
        strictStateSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([NewsEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forFeature('news', newsReducer),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    NewsHttpService,
    LoadingService,
    NewsEntityService,
    MessagesService,
    NewsResolver,
    NewsDataService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private newsDataService: NewsDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('NewsPost', newsDataService);
  }
}
