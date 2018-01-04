import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{

  private heroe:Heroe[] = [];

  constructor( private _activated:ActivatedRoute, private _heroeService:HeroesService, private _router:Router ) {
    this._activated.params.subscribe( parametros => {
      this.heroe = this._heroeService.obtenerHeroe(parametros["id"]);
    });
  }

  public irHeroes(){
    this._router.navigate(['heroes']);
  }

}
