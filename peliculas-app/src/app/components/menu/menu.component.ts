import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent{

  constructor( private _router:Router ) { }

  public buscarPelicula( texto:string ){

    if( texto.length == 0){
      return;
    } else {
      this._router.navigate(['buscar', texto ]);
    }

  }

}
