import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {
  groupId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.groupId = this.activatedRoute.snapshot.params['groupId'];
  }
}
