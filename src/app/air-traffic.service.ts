import { Injectable } from '@angular/core';
import { RootObject } from './rootInterface';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AirTrafficService {

  constructor(private _http: HttpClient) { }

  public url = '../assets/airCraftList.json';
  // public url = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';

  getAirTraffic(): Promise<RootObject> {
    return this._http.get(this.url)
               .pipe(map(res => res as RootObject)).toPromise();
  }


}
