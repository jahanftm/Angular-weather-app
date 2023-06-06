import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const month = value.toLocaleDateString('en-US', { month: 'long' });
    const day = value.toLocaleDateString('en-US', { day: 'numeric' })
    return month +' '+ day;
  }

}
