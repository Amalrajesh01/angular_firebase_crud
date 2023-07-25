import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Data } from '../interfaces/data';
@Injectable({
  providedIn: "root"
})
export class DataService {
  private itemsCollection!: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection<any>('data');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions: any[]) => {
        return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }
  addData(data: Data) {
    return this.db.collection('data').add(data).then(() => {
      alert("your answer is saved succesfully")
    })
      .catch((error) => {
        alert('Error adding question');
        console.error('Error adding question:', error);
      });
  }
}
