import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { GroupComponent } from './pages/group/group.component';
import { AddingStudentComponent } from './pages/adding-student/adding-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { exitGuard } from './guards/exit/exit.guard';

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
    path: 'students/adding',
    component: AddingStudentComponent,
    canDeactivate: [exitGuard],
  },
  {
    path: 'students/edit/:studentId',
    component: EditStudentComponent,
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
