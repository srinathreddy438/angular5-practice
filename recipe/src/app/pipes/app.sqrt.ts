import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
      name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
      // The actual logic for the pipe is put in a function called transform on the class, like so:
      // reference https://codecraft.tv/courses/angular/pipes/custom-pipes/
      transform(val: number): number {
            return Math.sqrt(val);
      }
}
