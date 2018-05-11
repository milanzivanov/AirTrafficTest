import { AirTrafficService } from './../air-traffic.service';
import { RootObject, AcList } from './../rootInterface';
import { Component, OnInit, ViewChild} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

import { } from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public rootObject: RootObject = null;
  public acList: AcList[] = [];

  // gm https://github.com/ultrasonicsoft/gmap-geolocation-demo
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  isTracking = false;

  currentLat: number;
  currentLong: number;

  marker: google.maps.Marker;

  constructor(private _getList: AirTrafficService) { }

  ngOnInit() {
    this.refreshList();

    // gm
    const mapProp = {
      center: new google.maps.LatLng(46.0500000, 20.1000000),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
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

  // gm
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    } else {
      this.marker.setPosition(location);
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    } else {
      this.marker.setPosition(location);
    }
  }
}
