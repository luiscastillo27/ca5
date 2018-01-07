import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  public termino:string;

  constructor( public _spoty:SpotifyService) {

  }

  public buscarArtista(){
    if(this.termino.length == 0){
       return;
    } else {
      return this._spoty.buscarArtista(this.termino);
    }

  }

}
