import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-tasks-editor',
  templateUrl: 'task-editor.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export default class TaskEditorComponent {
  constructor() {}
}