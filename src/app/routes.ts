import { Routes } from '@angular/router';
import { HomeComponent } from './listing/home.component';
import { DetailsComponent } from './details/details.component';
import {HomePageComponent} from "./home/home.component";

const routeConfig: Routes = [
  {
    path: 'listing',
    component: HomeComponent,
    title: 'Home listings'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Home page'
  }
];

export default routeConfig;
