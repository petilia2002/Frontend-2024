import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  getTaskById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${taskId}`);
  }

  createTask(task: Task): Observable<Task> {
    const localDate = new Date();
    return this.http.post<Task>(this.baseUrl, {
      ...task,
      createdAt: new Date(
        localDate.getTime() - localDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, -1),
      updatedAt: new Date(
        localDate.getTime() - localDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, -1),
    });
  }

  updateTask(id: number, task: Task): Observable<Task> {
    const localDate = new Date(); // Get current date and time in local timezone
    return this.http.put<Task>(`${this.baseUrl}/${id}`, {
      ...task,
      updatedAt: new Date(
        localDate.getTime() - localDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, -1),
    });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
