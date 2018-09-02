import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchProperty: string, searchRent: string, locality: string): any[] {
        if (!items) return [];
        return items.filter(it => {
            const propertySize = it.propertySize <= searchProperty;
            const rent = it.rent < searchRent;
            const searchPlace = it.locality && it.locality.toLowerCase().includes(locality);
            return (propertySize && rent && searchPlace);   

        });
    }
}