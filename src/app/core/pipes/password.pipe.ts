import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(pw: string): string {
    let passLength = pw.length;

    let retPass = "";
    while (retPass.length < passLength) {
    retPass += "#";
    }
    return retPass ;
  }

}