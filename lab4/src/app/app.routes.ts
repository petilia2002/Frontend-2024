import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { GroupComponent } from './pages/group/group.component';

export const routes: Routes = [
  {
    path: 'home',
    component: GreetingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'groups',
    component: GroupComponent,
  },
  {
    path: 'groups/:groupId',
    component: GroupComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
