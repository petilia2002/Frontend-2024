import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from '../../components/hello/hello.component';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule, CommonModule, HelloComponent],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  userName: string = '';
  isGreeting: boolean = false;

  handlerClick() {
    this.isGreeting = !this.isGreeting;
  }
}
