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

  // geolocation
  output = '';
  error = false;

  public rootObject: RootObject = null;
  public acList: AcList[] = [];

  constructor(private _getList: AirTrafficService) { }

  ngOnInit() {
    this.refreshList();

    this.getLocation();
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



  getLocation() {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by this browser.');
    }
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.handleError.bind(this));
  }

  showPosition(position) {
    this.output = `Latitude: ${position.coords.latitude}
                  Longitude: ${position.coords.longitude}`;
  }

  handleError(error) {
    this.error = true;
    console.log('Permission was denied');
  }

}
