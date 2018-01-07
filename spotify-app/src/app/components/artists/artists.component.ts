import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
})
export class ArtistsComponent implements OnInit {

  public artista:any = {};
  public pistas:any;
  constructor( private _routactive:ActivatedRoute, private _spoty:SpotifyService ) { }

  ngOnInit() {

    this._routactive.params.map( parametros => parametros["id"] ).subscribe( id =>{
        this._spoty.obtenerArtista(id).subscribe( artista => {
            this.artista = artista;
            console.log(artista);
        });
        this._spoty.obtenerListas(id).map( (resp:any) => resp.tracks ).subscribe( pistas => {
          this.pistas = pistas;
        });
    });

  }

}
