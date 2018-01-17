import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private urlYoutube:string;
  private apiKey:string;
  private playlist:string;
  private nextPageToken:string;

  constructor( public _http:Http ) {
    this.urlYoutube = "https://www.googleapis.com/youtube/v3";
    this.apiKey = "AIzaSyDp19AZcSHMtr8-namtxwtYDy8ZLiWyFjM";
    this.playlist = "UUuaPTYj15JSkETGnEseaFFg";
    this.nextPageToken = "";
  }

  public obtenerVideos(){
    let url = `${ this.urlYoutube }/playlistItems`;
    let parametros = new URLSearchParams();
    parametros.set('part', 'snippet');
    parametros.set('maxResults', '10');
    parametros.set('playlistId', this.playlist);
    parametros.set('key', this.apiKey);

    if( this.nextPageToken ){
      parametros.set('pageToken', this.nextPageToken);
    }
    
    return this._http.get( url, { search:parametros } ).map( resp => {

      this.nextPageToken = resp.json().nextPageToken;
      let videos:any[] = [];
      for(  let video of resp.json().items  ){
        let snippet = video.snippet;
        videos.push(snippet);
      }
      return videos;

    });
  }

}
