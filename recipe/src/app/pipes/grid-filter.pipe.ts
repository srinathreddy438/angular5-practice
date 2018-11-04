import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchProperty: string, searchRent: string, locality: string): any[] {
        if (!items) {
            return [];
        } else {
            return items.filter(it => {
                const propertySize = it.propertySize <= searchProperty;
                const rent = it.rent < searchRent;
                const searchPlace = it.locality && it.locality.toLowerCase().includes(locality);
                return (propertySize && rent && searchPlace);

            });
        }
    }
}

@NgModule({
    declarations: [FilterPipe],
    imports: [CommonModule],
    exports: [FilterPipe]
})

export class GridFilterPipeModule { }
