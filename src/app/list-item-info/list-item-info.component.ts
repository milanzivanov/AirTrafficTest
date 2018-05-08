import { Component, OnInit, Input } from '@angular/core';

import { RootObject, AcList } from './../rootInterface';
import { AirTrafficService } from '../air-traffic.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-list-item-info',
  templateUrl: './list-item-info.component.html',
  styleUrls: ['./list-item-info.component.css']
})
export class ListItemInfoComponent implements OnInit {

  @Input() item: AcList;

  constructor(
    private _airTrafficService: AirTrafficService,
    private _location: Location) { }

  ngOnInit() {
  }

  // back button
  backClicked() {
    this._location.back();
  }

}
