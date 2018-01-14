import { Component } from '@angular/core';
import { ChatService } from '../..//services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{

  constructor( private _chatServices:ChatService ) {

  }

  public login( provedor:string ){
    this._chatServices.login( provedor );
  }

}
