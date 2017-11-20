import { Component, OnInit } from '@angular/core';
import { latLng, LatLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {
  //latLng:any;
  
    
  constructor() { }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 5,
    center: latLng(23.7805733,90.2792384)
  };
  
  ngOnInit() {
  }

}
