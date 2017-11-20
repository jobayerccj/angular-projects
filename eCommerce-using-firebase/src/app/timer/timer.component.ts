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

  
  counter0 = 0;
	timer0Id: string;
	timer0button = 'Subscribe';

	
	ngOnInit() {
		this.st.newTimer('1sec', 1);
		
		this.subscribeTimer0();
		
	}

	delAllTimer() {
		this.st.delTimer('1sec');
		
	}

	subscribeTimer0() {
		if (this.timer0Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer0Id);
			this.timer0Id = undefined;
			this.timer0button = 'Start';
			console.log('timer 0 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
			this.timer0button = 'Stop';
			console.log('timer 0 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	timer0callback(): void {
		this.counter0++;
	}

	
}
