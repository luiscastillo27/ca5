import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})
export class PeliculaComponent{

  public pelicula:any;
  public busqueda:string;
  public regresarA:string;
  constructor( private _peliServes:PeliculasService, private _route:ActivatedRoute ) {
    this._route.params.subscribe( data => {

      this.regresarA = data["pag"];
      this._peliServes.obtenerPelicula( data["id"] ).subscribe( data => {
        this.pelicula = data;
      });

      if( data["busqueda"] ){
        this.busqueda = data["busqueda"];
      }
    });
  }


}
