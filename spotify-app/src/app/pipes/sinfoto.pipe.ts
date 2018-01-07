import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    let noImagen = 'assets/img/noimage.png';
    
    if(!imagenes){
      return noImagen
    } else {
      if(imagenes.length > 0){
        return imagenes[1].url;
      } else {
        return noImagen;
      }

    }
  }

}
