import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-tasks-editor',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'task-editor.component.html'
})
export default class TaskEditorComponent {
  constructor() {}
}