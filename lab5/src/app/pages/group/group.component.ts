import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students/students.service';
import { Group } from '../../models/group';
import { GroupsService } from '../../services/groups/groups.service';
import { ItalicDirective } from '../../directives/italic/italic.directive';
import { BirthCenturyPipe } from '../../pipes/birth-century/birth-century.pipe';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ItalicDirective,
    BirthCenturyPipe,
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent implements OnInit {
  groupId: string;
  selectedGroupId: number | null = null;
  groups: Group[] = [];
  students: Student[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private groupsService: GroupsService,
    private studentsService: StudentsService,
    private router: Router
  ) {
    this.groupId = this.activatedRoute.snapshot.params['groupId'];
  }

  ngOnInit(): void {
    this.groupsService
      .getGroups()
      .subscribe((groups) => (this.groups = groups));
  }

  onGroupChange(groupId: number): void {
    this.selectedGroupId = +groupId;
    this.studentsService.getStudentsByGroupId(groupId).subscribe((students) => {
      this.students = students;
    });
  }

  handlerClick() {
    this.router.navigate(['/students/adding']);
  }

  navigateToEdit(studentId: number) {
    this.router.navigate(['/students/edit', studentId]);
  }
}
