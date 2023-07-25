import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, QuerySnapshot } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Data } from '../interfaces/data';
import { collectionData } from '@angular/fire/firestore';
@Injectable({
  providedIn: "root"
})
export class DataService {
  private itemsCollection!: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  dataArray: Data[] = [];

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

  addData(data: any) {
    data.date = this.getCurrentDateTime();
    return this.db.collection('data').add(data).then(() => {
      alert("Your data is saved succesfully")
    })
      .catch((error) => {
        alert('Error adding data');
        console.error('Error adding question:', error);
      });
  }



  deleteItem(itemId: string): Promise<void> {
    alert("Data deleted successfully")
    return this.itemsCollection.doc(itemId).delete();
  }

  updateItem(itemId: string, updatedItem: any): Promise<void> {
    return this.itemsCollection.doc(itemId).update(updatedItem);
  }


  async getAll(): Promise<void> {
    try {
      const snapshot: any = await this.db.collection<Data>('data').get().toPromise();
      if (snapshot) {
        this.dataArray = snapshot.docs.map((doc: { id: any; data: () => Data; }) => ({ id: doc.id, ...doc.data() } as Data));
      }
    } catch (error) {
      console.error('Error getting data:', error);
    }
  }


  getCurrentDateTime(): string {
    const currentDateTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return currentDateTime.toLocaleString('en-IN', options);
  }

}
