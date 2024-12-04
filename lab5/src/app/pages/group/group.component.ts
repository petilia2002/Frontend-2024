import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students/students.service';
import { Group } from '../../models/group';
import { GroupsService } from '../../services/groups/groups.service';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent implements OnInit {
  groupId: string;
  groups: Group[] = [];
  students: Student[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private groupsService: GroupsService,
    private studentsService: StudentsService
  ) {
    this.groupId = this.activatedRoute.snapshot.params['groupId'];
  }

  ngOnInit(): void {
    this.groupsService
      .getGroups()
      .subscribe((groups) => (this.groups = groups));
  }

  onGroupChange(groupId: string): void {
    console.log(groupId);
  }
}
