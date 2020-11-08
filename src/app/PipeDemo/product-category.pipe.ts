import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCategory'
})
export class ProductCategoryPipe implements PipeTransform {

  transform(value: string): string {
    let result:string;
    switch (value){
      case 'A':
          result ='Orange';
          break;
      case 'B':
        result ='Green';
        break;
      case 'C':
        result ='Blue';
        break;
      default:
        result:'Other';
    }
    return result;
  }

}
