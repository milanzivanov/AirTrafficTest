import { AirTrafficService } from './../air-traffic.service';
import { RootObject, AcList, Feed } from './../rootInterface';
import { Component, OnInit } from '@angular/core';

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
    this.acList = temp.acList.slice(0, 50);

    console.log(this.rootObject);

  }

}
