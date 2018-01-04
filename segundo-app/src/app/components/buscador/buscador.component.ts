import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service.ts';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  private heroes:any[] = [];
  public termino:string;

  constructor( private _activate:ActivatedRoute, private _heroeService:HeroesService, private _route:Router ) { }

  ngOnInit() {
    this._activate.params.subscribe( parametros =>{
      this.termino = parametros["termino"];
      this.heroes = this._heroeService.buscarHeroe(parametros["termino"]);
      console.log(this.heroes);
    });
  }

  public verHeroe(idx:number){
    this._route.navigate(['heroes', idx]);
  }

}
