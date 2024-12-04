import { CanDeactivateFn } from '@angular/router';
import { AddingStudentComponent } from '../../pages/adding-student/adding-student.component';

export const exitGuard = (component: AddingStudentComponent) => {
  if (!component.saved) {
    return confirm('Вы действительно хотите покинуть страницу?');
  }

  return true;
};
