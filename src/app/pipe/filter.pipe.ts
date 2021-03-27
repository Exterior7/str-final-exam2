import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, phrase: string, key: string): any[] | null {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    phrase = ('' + phrase).toLowerCase();
    return value.filter(item => {
      return ('' + item[key]).toLowerCase().includes(phrase);
    })
  }
}
