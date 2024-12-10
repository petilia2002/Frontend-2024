import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks/tasks.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  task: Task = {
    type: 'task',
    priority: 'medium',
    status: 'in-progress',
    title: '',
    description: '',
    assignee: '',
    creator: '',
  };

  constructor(private tasksService: TasksService, private router: Router) {}

  saveTask(): void {
    this.tasksService.createTask(this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
