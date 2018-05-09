import { Component, OnInit } from '@angular/core';

import { RootObject, AcList } from './../rootInterface';
import { AirTrafficService } from '../air-traffic.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item-info',
  templateUrl: './list-item-info.component.html',
  styleUrls: ['./list-item-info.component.css']
})
export class ListItemInfoComponent implements OnInit {

  item: AcList;

  constructor(
    private _airTrafficService: AirTrafficService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    this.getInfo();
  }

  async getInfo() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = await this._airTrafficService.getFlightInfo(parseInt(id, 10));
  }

  backClicked() {
    this._location.back();
  }

}
