import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit{

  private mensaje:string;
  private elemento:any;

  constructor( private _chatService:ChatService ) {
    this._chatService.cargarMensajes().subscribe( () => {
      setTimeout( ()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20)
    });
    this.mensaje = "";
  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');
  }

  public enviarMensaje(){
    if(this.mensaje.length > 0){
      this._chatService.enviarMensaje( this.mensaje ).then( () => {
          console.log("Mensaje enviado");
          this.mensaje = "";
      }).catch( error => {
          console.log("Error al enviar mensaje", error );
      });
    } else {
      return;
    }
  }

}
