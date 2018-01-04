import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private _route:Router ) { }

  ngOnInit() {

  }

  public buscarHeroe(termino:string){
    this._route.navigate(['buscador', termino])
  }

}
