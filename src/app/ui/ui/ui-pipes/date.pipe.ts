import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
  }
}
