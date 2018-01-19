import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';
import { Imagen } from '../interface/imagenes';

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES:string;

  constructor( private _db:AngularFirestore ) {
    this.CARPETA_IMAGENES = "img";
  }

  public cargarImagenes( imagenes:FileItem[] ){
    const storageRef = firebase.storage().ref();
    for( const item of imagenes ){
        item.estaSubiendo = true;
        if( item.progreso >= 100 ){
          continue;
        } else {
          const upload:firebase.storage.UploadTask =  storageRef.child(`${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`).put( item.archivo );
          upload.on( firebase.storage.TaskEvent.STATE_CHANGED,
              (snapshot:firebase.storage.UploadTaskSnapshot) => item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
              (error) => console.error("Error al subir imagenes", error),
              () => {
                  console.log("Imagen cargada correctamente");
                  item.url = upload.snapshot.downloadURL;
                  item.estaSubiendo = false;
                  this.guardarImagen({
                    nombre: item.nombreArchivo,
                    url: item.url
                  })
              });
        }
    }
  }


  public guardarImagen( imagen:Imagen ){
    this._db.collection(`/${ this.CARPETA_IMAGENES }`).add( imagen );
  }

}
