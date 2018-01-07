import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  public artistas:any[] = [];
  private token:string;
  private urlSpoty:string;

  constructor( public _http:HttpClient ) {
    this.token = "BQB4vj4I-v0o3-MHcLtn8BrP3ICXqw4F8GdIcy-vuXOv9CMVbumi3f4GI33jynC_uA4X6pQIdP7C6Y-SpsY";
    this.urlSpoty = "https://api.spotify.com/v1/";
  }

  private headers():HttpHeaders{

    let headers = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    });
    return headers;

  }

  public buscarArtista(termino:string){

    let url = `${this.urlSpoty}search?query=${termino}&type=artist&limit=20`;
    this._http.get(url, { headers: this.headers() } ).subscribe(resp => {
      this.artistas = resp.artists.items;
    });

  }

  public obtenerArtista(id:string){

    let url = `${this.urlSpoty}artists/${id}`;
    return this._http.get(url, { headers: this.headers() });

  }

  public obtenerListas(id:string){

      let url = `${this.urlSpoty}artists/${id}/top-tracks?country=MX`;
      return this._http.get(url, { headers:this.headers() });

  }

}
