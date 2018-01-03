import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  public mostrar:boolean = true;
  frace:any = {
    mensaje: "Un gran poder requiere una gran reponsabilidad",
    autor: "Ben Parcker"
  }

  personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
