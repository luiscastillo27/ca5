import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensajes.interfaces';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  private chats:Mensaje[] = [];
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public usuario:any = {};
  constructor( private _afs: AngularFirestore, public _afAuth: AngularFireAuth ) {
    this._afAuth.authState.subscribe( data => {
      if(!data){
        return;
      } else {
        this.usuario.nombre = data.displayName;
        this.usuario.uid = data.uid;
      }
    });
  }

  public login( provedor:string ) {
    if(provedor === 'google'){
      this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    if(provedor === 'twitter'){
      this._afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
    if(provedor === 'facebook'){
      this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }
  public logout() {
    this.usuario = {};
    this._afAuth.auth.signOut();
  }
  public cargarMensajes(){
    this.itemsCollection = this._afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5) )
    return this.itemsCollection.valueChanges().map( (mensajes:Mensaje[]) => {

      this.chats = [];
      for( let mensaje of mensajes){
        this.chats.unshift(mensaje);
      }

    });
  }

  public enviarMensaje( texto:string ){

    let mensaje:Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }
    return this.itemsCollection.add(mensaje);

  }

}
