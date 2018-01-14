import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
})
export class GaleriaComponent {

  @Input("peliculas") peliculas;
  @Input("titulo") titulo;

  constructor() { }

}
