import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  groupId: number = 6131;
  constructor(private router: Router) {}
  navigateToGroup() {
    this.router.navigate(['/groups', this.groupId]);
  }
}
