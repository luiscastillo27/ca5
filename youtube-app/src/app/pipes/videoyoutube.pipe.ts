import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoyoutube'
})
export class VideoyoutubePipe implements PipeTransform {

  constructor( private _dom:DomSanitizer ){}

  transform(value: string, url: string ): any {
    return this._dom.bypassSecurityTrustResourceUrl( url + value);
  }

}
