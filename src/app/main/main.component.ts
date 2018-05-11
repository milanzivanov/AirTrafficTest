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

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: number;
  longitude: number;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


  public rootObject: RootObject = null;
  public acList: AcList[] = [];

  constructor(private _getList: AirTrafficService) { }

  ngOnInit() {
    this.refreshList();

    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
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

  // google maps by https://github.com/ultrasonicsoft/gmap-ng5/blob/master/src/app/app.component.ts
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  showCustomMarker() {


    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

  }
}
