import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-templates',
  templateUrl: './form-templates.component.html',
})
export class FormTemplatesComponent{

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre"
  }

  constructor() { }

  public guardar( forma:NgForm ){
    console.log(forma);
    console.log(this.usuario);
  }

  public paises = [{
      codigo: 'CRI',
      nombre: 'Costa Rica'
  },{
      codigo: 'ESP',
      nombre: 'Espana'
  },{
      codigo: 'MX',
      nombre: 'Mexico'
  }];

  public sexos = ['Hombre', 'Mujer'];

}
