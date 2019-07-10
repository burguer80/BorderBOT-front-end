import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'borderSearch'
})
export class BorderSearchPipe implements PipeTransform {

  transform(borders: any, arg: any): any {
    if (arg === '' || arg.length < 3) return borders;
    const resultBorders = [];
    for (const border of borders) {
      if (border.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        border.crossing_name && border.crossing_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultBorders.push(border);
      }
    }
    return resultBorders;
  }

}
