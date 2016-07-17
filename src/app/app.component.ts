import { Component } from '@angular/core';
import { PomodoroTasksComponent } from './components/pomodoro-tasks/pomodoro-tasks';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <pomodoro-tasks></pomodoro-tasks>
  `,
  styleUrls: ['app.component.css'],
  directives: [PomodoroTasksComponent]
})
export class AppComponent {
}
