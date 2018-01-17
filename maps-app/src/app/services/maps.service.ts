import { Injectable } from '@angular/core';
import { Marcadores } from '../interfaces/marcadores';

@Injectable()
export class MapsService {

  marcadores:Marcadores[] = [];

  public guardarMarcadores(){
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores) );
  }

  public crearMarcador( marcador:Marcadores ){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  public borrarMarcador( id:number ){
    this.marcadores.splice(id, 1);
    this.guardarMarcadores();
  }

  public cargarMarcadores(){
    if(localStorage.getItem("marcadores")){
        this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    } else {
      this.marcadores = [];
    }
  }


}
