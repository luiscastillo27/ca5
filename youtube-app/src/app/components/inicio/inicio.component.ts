import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent{

  public videos:any[] = [];
  public videoSel:any = [];
  public videoId:any;

  constructor( public _yout:YoutubeService ) {
    this._yout.obtenerVideos().subscribe( videos => {
      this.videos = videos;
    });
  }

  public verVideo( video:any ){
    this.videoSel = video;
    $('#exampleModal').modal();
  }

  public cerrarModal(){
    this.videoSel = null;
    $('#exampleModal').modal('hide');
  }

  public mostrarMas(){
    this._yout.obtenerVideos().subscribe( videos => {
      this.videos.push.apply( this.videos, videos);
    });
  }


}
