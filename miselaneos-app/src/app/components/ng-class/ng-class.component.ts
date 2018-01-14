import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
})
export class NgClassComponent{

  public alerta:string;
  public loading:boolean;
  public propiedades:Object = {
    danger: false
  };

  constructor() {
    this.loading = false;
    this.alerta = "alert-danger";
  }

  public ejecutar(){
    this.loading = true;
    setTimeout( () =>{
      this.loading = false;
    }, 3000);
  }

}
