import { Component, OnInit } from '@angular/core';
import {SimpleTimer} from 'ng2-simple-timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timerId: any;
  constructor(private st: SimpleTimer) {

   }

  ngOnInit() {
    
  }

}
