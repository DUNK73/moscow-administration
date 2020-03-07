import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, label: string = 'млрд.р'): any {
    return `${(value / 1000000000).toFixed(3)} ${label}`;
  }

}
