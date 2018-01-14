import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  public urlService:string;
  public urlActualizar:string;

  constructor( private _http:Http ) {
    this.urlService = "https://angular5-c315d.firebaseio.com/heroes.json";
    this.urlActualizar = "https://angular5-c315d.firebaseio.com/heroes";
  }

  public nuevoHeroe( heroe:Heroe ){
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.post( this.urlService, body, { headers: headers }).map( res =>{
      console.log( res.json() );
      return res.json();
    });
  }

  public actualizarHeroe( heroe:Heroe, key$:string ){
    let body = JSON.stringify( heroe );
    let url = `${ this.urlActualizar }/${ key$ }.json`;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.put( url, body, { headers: headers }).map( res =>{
      console.log( res.json() );
      return res.json();
    });
  }

  public obtenerHeroe( id:string ){
    let url = `${ this.urlActualizar }/${ id }.json`;
    return this._http.get( url ).map( resp => resp.json() );
  }

  public listarHeroes( ){
    return this._http.get( this.urlService ).map( resp => resp.json() );
  }

  public eliminarHeroe( id:string ){
    let url = `${ this.urlActualizar }/${ id }.json`;
    return this._http.delete( url ).map( resp => resp.json() );
  }

}
