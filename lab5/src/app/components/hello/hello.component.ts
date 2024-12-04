import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() userName: string = '';
  @Input() isGreeting: boolean = false;

  constructor() {
    //console.log('Constructor');
  }

  ngOnInit(): void {
    //console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('OnChanges');
  }

  ngDoCheck(): void {
    //console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    //console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    //console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    //console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked');
    // console.log(`Username: ${this.userName}`);
    // console.log(`Is greeting: ${this.isGreeting}`);
  }

  ngOnDestroy(): void {
    //console.log('OnDestroy');
  }
}
