import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { RootObject, AcList } from './rootInterface';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AirTrafficService {

  constructor(private _http: HttpClient) { }

  public url = '../assets/airCraftList.json';
  // you can use this but than need to install cors browser extension
  // public url = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';

  getAirTraffic(): Promise<RootObject> {
    return this._http.get(this.url)
               .pipe(map(res => res as RootObject)).toPromise();
  }

  async getFlightInfo(id: number) {
    const r = await this.getAirTraffic();
    const res = r.acList.find(p => p.Id === id);
    return res;
  }

}
