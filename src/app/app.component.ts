import { Component } from '@angular/core';
import {UploadComponent} from './upload/upload.component';
import {DataComponent} from './data/data.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UploadComponent, DataComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfire-tutorial';
}
