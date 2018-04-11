import { Pipe } from '@angular/core';
 
@Pipe({
  name: 'teatPipe'
})
export class TeatPipe {
  transform(value, args) {
    return value;
  }
}