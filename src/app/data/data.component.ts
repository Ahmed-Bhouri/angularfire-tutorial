import { Component } from '@angular/core';
import {doc, docData, Firestore, setDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html'
})
export class DataComponent {

  constructor(private database: Firestore) { }

  getData(){
    let ref = doc(this.database, 'default/0');
    docData(ref).subscribe((doc) => {
      console.log(doc);
    });
  }

  setData(){
    let ref = doc(this.database, 'default/0');
    setDoc(ref, {name: 'foo2', counter: 7}, {merge: true}).then(() => {
      console.log('Document written');

    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
  }

}
