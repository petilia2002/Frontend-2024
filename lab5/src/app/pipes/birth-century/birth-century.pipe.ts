import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthCentury',
  standalone: true,
})
export class BirthCenturyPipe implements PipeTransform {
  transform(birthYear: number): string {
    const century = Math.floor((birthYear - 1) / 100) + 1;
    return `Родился в ${century}-м веке нашей эры`;
  }
}
