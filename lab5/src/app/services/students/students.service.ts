import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:3000/students`);
  }

  getStudentById(id: number): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:3000/students?id=${id}`);
  }

  getStudentsByGroupId(groupId: number): Observable<Student[]> {
    return this.http.get<Student[]>(
      `http://localhost:3000/students?groupId=${groupId}`
    );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`http://localhost:3000/students`, student);
  }

  updateStudent(id: number, student: any): Observable<Student> {
    return this.http.put<Student>(
      `http://localhost:3000/students/${id}`,
      student
    );
  }
}
