import { Component } from '@angular/core';
import { RootObject, AcList } from './rootInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  item: AcList;

}
