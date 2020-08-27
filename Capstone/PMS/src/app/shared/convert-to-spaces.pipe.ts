import { Pipe, PipeTransform } from '@angular/core';
//this converts the '-' to spaces in the product code
@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
