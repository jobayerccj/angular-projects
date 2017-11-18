import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lastfm',
  templateUrl: './lastfm.component.html',
  styleUrls: ['./lastfm.component.css']
})
export class LastfmComponent implements OnInit {

  constructor(private http: Http) { 
    this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=13b205493b27649e02a0c79c5afcf588&format=json')
    .subscribe(
      response => {
        console.log(response.json());
      })
  }

  ngOnInit() {
  }

}
