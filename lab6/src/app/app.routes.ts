import { Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

export const routes: Routes = [
  {
    path: 'tasks',
    component: TasksListComponent,
  },
  {
    path: 'tasks/add',
    component: TaskFormComponent,
  },
  {
    path: 'tasks/edit/:taskId',
    component: EditFormComponent,
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/tasks',
  },
];
