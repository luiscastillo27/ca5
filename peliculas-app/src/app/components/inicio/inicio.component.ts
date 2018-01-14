import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {

  public cartelera:any;
  public populares:any;
  public popularesNinos:any;
  constructor( private _peliServe:PeliculasService ) {
    this._peliServe.obtenerCartelera().subscribe( data => {
        this.cartelera = data;
    });
    this._peliServe.obtenerPopulares().subscribe( data => {
        this.populares = data;
    });
    this._peliServe.obtenerNinos().subscribe( data => {
        this.popularesNinos = data;
    });
  }

  ngOnInit() {

  }

}
