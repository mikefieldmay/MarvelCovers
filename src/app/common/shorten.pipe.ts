import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  defaultLength = 38;

  transform(value: any, args?: any): any {
    if (value.length < 41) {
      return value;
    } else {
     return value.substr(0, this.defaultLength) + '...';
    }
  }

}

// import { PipeTransform } from "@angular/core"; // We should import the PipeTransform interface from Angular Core

// @Pipe({
//   name: 'shorten'
// }) // the pipe decorator allows us to give our pipe a name that can be referenced in the HTML

// export class ShortenPipe implements PipeTransform {
//   transform(value: any) { // transform takes the value which is the string being passed to the pipe
//     return value.substr(0, 10) // substr is a javascript method
//   }

// }
