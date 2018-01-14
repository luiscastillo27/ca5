import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent{

  public buscar:string;
  public texto:string;
  constructor( private _peliServes:PeliculasService, private _route:ActivatedRoute ) {
      this._route.params.subscribe( data => {
        if( data["texto"] ){
          this.buscar = data["texto"];
          this.buscarPelicula();
        }
      });
  }

  public buscarPelicula(){

    if( this.buscar.length == 0 ){
      return;
    } else {
      this._peliServes.buscarPelicula( this.buscar ).subscribe( data => {
        console.log(data);
      });
    }

  }

}
