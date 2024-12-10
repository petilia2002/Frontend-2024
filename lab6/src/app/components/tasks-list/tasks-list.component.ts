import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks/tasks.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filters = { type: '', priority: '', assignee: '' };

  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.sort(
        (a, b) =>
          new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime()
      );
      this.filteredTasks = [...this.tasks];
    });
  }

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter(
      (task) =>
        (!this.filters.type || task.type === this.filters.type) &&
        (!this.filters.priority || task.priority === this.filters.priority) &&
        (!this.filters.assignee ||
          task.assignee.includes(this.filters.assignee))
    );
  }

  addTask() {
    this.router.navigate(['/tasks/add']);
  }

  editTask(taskId: number | undefined) {
    this.router.navigate(['/tasks/edit', taskId]);
  }

  deleteTask(taskId: number | undefined): void {
    if (taskId) {
      this.tasksService.deleteTask(taskId).subscribe(() => {
        console.log('Задача удалена');
        this.tasks = [...this.tasks.filter((task) => task.id !== taskId)];
        this.filteredTasks = [...this.tasks];
      });
    } else {
      console.error('Не удалось удалить задачу');
    }
  }
}
