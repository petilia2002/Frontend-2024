import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks/tasks.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent implements OnInit {
  taskId: number = 0;

  task: Task = {
    type: 'task',
    priority: 'medium',
    status: 'in-progress',
    title: '',
    description: '',
    assignee: '',
    creator: '',
    createdAt: new Date(),
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.taskId = this.activatedRoute.snapshot.params['taskId'];
    this.tasksService.getTaskById(this.taskId).subscribe((task) => {
      this.task = { ...task };
    });
  }

  saveTask(): void {
    this.tasksService.updateTask(this.taskId, this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
