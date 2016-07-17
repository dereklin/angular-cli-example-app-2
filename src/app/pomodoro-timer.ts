import { Component } from '@angular/core';
import { CountdownComponent }  from './countdown';


@Component({
  selector: 'pomodoro-timer',
  directives: [CountdownComponent],
  template: `<countdown [seconds]="25"
                (progress)="timeout = $event"
                (complete)="onCountdownCompleted()"
                ></countdown>
                <p *ngIf="timeout < 10">
                 Beware! Only <strong>{{timeout}} seconds</strong> left.
                </p>
                
                
                
                `
})

export class PomodoroTimerComponent {
  timeout: number;
  onCountdownCompleted(): void {
    console.log('Time up!');
  }  
}

