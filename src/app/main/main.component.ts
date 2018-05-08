import { AirTrafficService } from './../air-traffic.service';
import { RootObject, AcList } from './../rootInterface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public rootObject: RootObject = null;
  public acList: AcList[] = [];

  constructor(private _getList: AirTrafficService) { }

  async ngOnInit() {
    const temp = await this._getList.getAirTraffic();
    this.rootObject = temp;
    this.acList = temp.acList.slice(0, 50).sort();

    console.log(this.rootObject);
  }

  moreInfo() {
    console.log(123);
  }

}
