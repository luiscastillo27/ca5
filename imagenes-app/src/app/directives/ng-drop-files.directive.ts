import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivosDirect:FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  @HostListener('dragover', ['$event']) public onDragEnter( event:any ){
    this.mouseSobre.emit( true );
    this.__prevenirDetener( event );
  }

  @HostListener('drop', ['$event']) public onDrop( event:any ){

    const transferencia = this.__obtenerTransferencia( event );
    if(!transferencia){
      return;
    }
    this.__extraerArchivos( transferencia.files );
    this.__prevenirDetener( event );
    this.mouseSobre.emit( false );
  }

  private __extraerArchivos( listaArchivo:FileList ){

    for( const propiedad in Object.getOwnPropertyNames(listaArchivo) ){
      const archivoTemp = listaArchivo[propiedad];
      if( this.__archivoCorrecto(archivoTemp) ){
        const nuevoArchivo = new FileItem( archivoTemp );
        this.archivosDirect.push(nuevoArchivo);
      }
    }

    console.log(this.archivosDirect);

  }

  private __obtenerTransferencia( event:any ){

    if(event.dataTransfer){
      return event.dataTransfer;
    } else {
      return event.originalEvent.dataTransfer;
    }

  }

  private __archivoCorrecto( archivo:File ):boolean {

    if ( !this.__archivoFueDroppeado( archivo.name ) && this.__soloImagenes( archivo.type ) ){
      return true;
    }else {
      return false;
    }

  }

  private __prevenirDetener( event ){
    event.preventDefault();
    event.stopPropagation();
  }

  private __archivoFueDroppeado( nombreArchivo:string ):boolean {

    for ( const archivo of this.archivosDirect ) {
      if ( archivo.nombreArchivo === nombreArchivo  ) {
        console.log('El archivo ' + nombreArchivo + ' ya esta agregado');
        return true;
      }
    }
    return false;

  }

  private __soloImagenes( tipo:string ):boolean {

    if( tipo === '' || tipo === undefined){
      return false;
    } else {
      if( tipo.startsWith('image') ){
        return true;
      }
    }
    return false;

  }
}
