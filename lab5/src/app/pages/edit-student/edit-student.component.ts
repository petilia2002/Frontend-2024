import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Group } from '../../models/group';
import { StudentsService } from '../../services/students/students.service';
import { GroupsService } from '../../services/groups/groups.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent {
  studentId: number = 0;
  groups: Group[] = [];
  student: Student = {
    id: 0,
    fullName: '',
    course: 0,
    groupId: 0,
    year: 0,
    birthYear: 0,
  };

  // fullName: string = '';
  // course: number = 0;
  // groupId: number = 0;
  // year: number = 0;
  // birthYear: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private groupsService: GroupsService,
    private router: Router
  ) {
    this.studentId = this.activatedRoute.snapshot.params['studentId'];
    console.log(this.studentId);
    this.studentsService.getStudentById(this.studentId).subscribe((student) => {
      console.log(student);
      this.student = student[0];
    });
    console.log(this.student);
  }

  ngOnInit() {
    this.groupsService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  onSubmit(form: NgForm) {
    console.log('Submit!');
    console.log(this.student);
    const { id, ...studentWithoutId } = this.student;
    this.studentsService.updateStudent(id, studentWithoutId).subscribe({
      next: (student) => {
        console.log('Student updated!', student);
        form.reset();
        this.router.navigate(['/groups']);
      },
      error: (error) => console.error('Error updating student', error),
    });
  }
}
