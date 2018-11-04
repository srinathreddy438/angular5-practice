import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'default'
})

export class DefaultPipe implements PipeTransform {
    transform(val: string, defaultVal: string) {
        let finalVal;
        finalVal = val ? val : defaultVal;
        console.log(finalVal);
        return finalVal;
    }
}
