import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], sortCriteria: string = "", asc: boolean = true): any[] {
    if(sortCriteria == "") 
      return arr;

    const sortFn = (a: any, b: any): number => {
      let colA = a[sortCriteria];
      colA = (typeof colA) == "number" ? colA : colA.toString().toLowerCase();
      let colB = b[sortCriteria];
      colB = (typeof colB) == "number" ? colB : colB.toString().toLowerCase();
      if(colA === colB) return 0;
      if(colA < colB) {
        return (asc) ? -1 : 1;
      } else {
        return (asc) ? 1 : -1;
      }
    };
    
    return arr.sort(sortFn);
  }

}