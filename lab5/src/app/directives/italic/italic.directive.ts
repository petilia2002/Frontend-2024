import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appItalic]',
  standalone: true,
})
export class ItalicDirective implements OnChanges {
  @Input() birthYear: number = 2002;
  constructor(private elementRef: ElementRef) {}

  calculateAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    if (birthYear > currentYear) {
      throw new Error('Год рождения не может быть больше текущего года.');
    }
    return currentYear - birthYear;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const age = this.calculateAge(this.birthYear);
    if (age < 22) {
      this.elementRef.nativeElement.style.fontStyle = 'italic';
    }
  }
}
