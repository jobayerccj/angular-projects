import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  myControl = new FormControl();
  options = ["1","2","3"];
  constructor() { }
  filteredOptions: Observable<string[]>;
  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .startWith('')
    .map(val => this.filter(val));
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
 }

}
