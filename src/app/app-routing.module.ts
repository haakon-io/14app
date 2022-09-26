import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CodeComponent } from './pages/code/code.component';
import { FoodComponent } from './pages/food/food.component';
import { TravelComponent } from './pages/travel/travel.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsResolver } from './pages/news/news.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'code',
    component: CodeComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
    resolve: {
      newsPosts: NewsResolver,
    },
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'home',
    redirectTo: '/',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
