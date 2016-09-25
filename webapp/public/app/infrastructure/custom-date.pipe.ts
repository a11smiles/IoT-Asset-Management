import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customDate'})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
      var date = new Date(value);
    return (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }
}