import { Component, Input, Output, EventEmitter } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>'
})

export class CountdownComponent {

  @Input()
  seconds: number;
  intervalId: number;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);

      this.complete.emit(null); 
    }
    this.progress.emit(this.seconds);
  }
}
