import { AirTrafficService } from './../air-traffic.service';
import { RootObject, AcList } from './../rootInterface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public rootObject: RootObject = null;
  public acList: AcList[] = [];

  constructor(private _getList: AirTrafficService) { }

  ngOnInit() {
    this.refreshList();
  }

  async refreshList() {
    const temp = await this._getList.getAirTraffic();
    this.rootObject = temp;
    // sort
    this.acList = temp.acList.slice(0, 50)
      .sort((a, b) =>  (a.Alt > b.Alt) ? 1 : ((b.Alt > a.Alt) ? -1 : 0));
    // refresh
    setTimeout(() => this.refreshList(), 1000 * 60 * 1);

    console.log(this.rootObject);
  }

}
