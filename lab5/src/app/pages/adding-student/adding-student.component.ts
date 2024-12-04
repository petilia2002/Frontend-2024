import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentsService } from '../../services/students/students.service';
import { GroupsService } from '../../services/groups/groups.service';
import { Group } from '../../models/group';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-student',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './adding-student.component.html',
  styleUrl: './adding-student.component.css',
})
export class AddingStudentComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    course: new FormControl(0, Validators.required),
    year: new FormControl(2020, Validators.required),
    birthYear: new FormControl(2000, Validators.required),
    groupId: new FormControl(1, Validators.required),
  });
  groups: Group[] = [];
  //selectedGroupId: number = 0;

  constructor(
    private studentsService: StudentsService,
    private groupsService: GroupsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.groupsService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  onSubmit() {
    console.log(this.myForm.getRawValue());
    this.studentsService.addStudent(this.myForm.getRawValue()).subscribe({
      next: (student) => {
        console.log('Student added', student);
        this.myForm.reset();
        this.router.navigate(['/groups']);
      },
      error: (error) => console.error('Error adding student', error),
    });
  }

  // onGroupChange(groupId: number): void {
  //   this.selectedGroupId = +groupId;
  // }
}
