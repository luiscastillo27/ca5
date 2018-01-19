import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Imagen } from '../../interface/imagenes';
export interface Item { nombre: string; url: string; }

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent {

  private itemsCollection: AngularFirestoreCollection<Imagen>;
  items: Observable<Imagen[]>;

  constructor(private _afs: AngularFirestore) {
    this.itemsCollection = _afs.collection<Imagen>('img');
    this.items = this.itemsCollection.valueChanges();
  }

}
