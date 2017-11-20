import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  translate2="";

  constructor() { }

  ngOnInit() {
  }

  translate(value){

    if(value == 'name'){
      this.translate2 = 'Nome';
    }
    else{
      this.translate2 = value;
    }
    
  }
}
