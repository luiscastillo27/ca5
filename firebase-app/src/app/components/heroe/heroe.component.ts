import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }
  public btn:string;
  public id:string;
  public nuevo:boolean;

  constructor( private _heroeService:HeroesService, private _router:Router, private _routerActive:ActivatedRoute ) {
    this.nuevo = false;
    this._routerActive.params.subscribe( resp =>{
      this.id = resp.id;

      if(this.id !== "nuevo"){

        this._heroeService.obtenerHeroe(this.id).subscribe( data => {
          this.heroe = data;
          this.btn = `Editar a ${ data.nombre }`;
        });

      } else {
        this.btn = "Agregar Heroe";
      }

    })
  }

  ngOnInit() {

  }

  public guardar(){
    if(this.id === 'nuevo'){

      this._heroeService.nuevoHeroe( this.heroe ).subscribe(data =>{
        this._router.navigate(['/heroe', data.name])
      }, error =>{
        console.error(error);
      });

    } else {

      this._heroeService.actualizarHeroe( this.heroe, this.id).subscribe( data =>{
        console.log(data);
      },error =>{

      });

    }

  }

  public resetear( form:NgForm ){
    this._router.navigate(['./heroe', 'nuevo']);
    form.reset({
      casa: "Marvel"
    });
  }


}
