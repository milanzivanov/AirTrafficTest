import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  output = '';
  error = false;

  getLocation() {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by this browser.');
    }
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.handleError.bind(this));
  }

  showPosition(position) {
    this.output = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
  }

  handleError(error) {
    this.error = true;
    console.log('Permission was denied');
  }

  ngOnInit() {
    this.getLocation();
  }

}
