import { Component } from '@angular/core';
import {ref, Storage, uploadBytes} from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
})
export class UploadComponent {

  file: any;
  fileName: String = "";

  constructor(private storage: Storage) {
  }

  selectFile(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  uploadFile(){
    uploadBytes(ref(this.storage, "test/"+ this.fileName ), this.file ).then((snapshot) => {
      console.log('Uploaded a blob or file!');

    });
  }



}
