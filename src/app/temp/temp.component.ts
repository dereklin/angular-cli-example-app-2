import { Component  } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-temp',
  templateUrl: 'temp.component.html',
  styleUrls: ['temp.component.css'],
  providers: []
})

export class TempComponent {
  constructor() {

    // var obs = Observable.interval(500).take(5)
    //             .do(i => console.log("obs value "+ i) )
    //             .share();

    // obs.subscribe(value => console.log("observer 1 received " + value));

    // obs.subscribe(value => console.log("observer 2 received " + value));


    let observer = {
      next: v => console.log(v),
      complete: () => console.log('|')
    };

    // let a$ = Observable.of(1, 2, 3);

    let a$ = Observable.interval(500).take(5)
                .do(i => console.log("obs value "+ i) )
                .share();

    a$.subscribe(observer);


  }


}