import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
})
export class CargaComponent implements OnInit {

  public estaSobreElemento:boolean;
  public archivos: FileItem[] = [];
  constructor( public _cargaService:CargaImagenesService ) {
    this.estaSobreElemento = false;
  }

  ngOnInit() {

  }

  public limpiarImagenes(){
    this.archivos = [];
  }

  public cargarImagenes(){
    this._cargaService.cargarImagenes( this.archivos );
  }

  public pruebaSobreElemento( event:any ){
    console.log(event);
  }

}
