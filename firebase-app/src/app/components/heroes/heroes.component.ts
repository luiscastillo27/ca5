import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent{

  private heroes:Heroe;
  public loading:boolean;
  constructor( private _heroeServices:HeroesService ) {
    this.loading = true;
    this._heroeServices.listarHeroes().subscribe( data => {
      setTimeout( () =>{
        this.loading = false;
        this.heroes = data;
      },2000);
    });

  }

  public eliminar( id:string){
    console.log(id);
    this._heroeServices.eliminarHeroe( id ).subscribe( data => {
      if(!data){
        delete this.heroes[id];
      } else {
        console.error(data);
      }
    });
  }

}
