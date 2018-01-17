import { Component } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Marcadores } from './interfaces/marcadores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 20.0352932;
  lng: number = -98.7756557;
  zoom: number = 16;
  marcadorSel:any = null;
  draggable:string = "1";

  constructor( public _maps:MapsService ){
    this._maps.cargarMarcadores();
  }

  public clickMapa( evento ){

    let nuevoMarcador:Marcadores = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      draggable: true
    }
    this._maps.crearMarcador( nuevoMarcador );

  }

  public dragEndMarcador( marcador:Marcadores, evento){
      let lat = evento.coords.lat;
      let lng = evento.coords.lng;
      marcador.lat = lat;
      marcador.lng = lng;
      this._maps.guardarMarcadores();
  }


  public clickMarcador( marcador:Marcadores, i:number ){

      this.marcadorSel = marcador;
      if( this.marcadorSel.draggable ){
        this.draggable = "1";
      } else {
        this.draggable = "0";
      }

  }

  public cambiarDraggable(){

    if(this.draggable == "1"){
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }

  }

  public borrarMarcador( id:number ){
    this._maps.borrarMarcador( id );
  }


}
