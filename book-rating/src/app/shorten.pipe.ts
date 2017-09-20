import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number = 10, suffix: string = '...'): string {
    return value.substring(0, length) + suffix;
  }

}
