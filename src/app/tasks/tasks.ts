import TasksComponent from './tasks.component';
import TaskTooltipDirective from './task-tooltip.directive';
import TaskDetailComponent from './task-detail.component';
import TaskIconsComponent from './task-icons.component';
import TaskEditorComponent from './task-editor.component';



const TASKS_DIRECTIVES: any[] = [
  TasksComponent,
  TaskTooltipDirective,
  TaskDetailComponent,
  TaskEditorComponent,
  TaskIconsComponent
];

export {
  TASKS_DIRECTIVES,
  TasksComponent,
  TaskTooltipDirective,
  TaskDetailComponent,
  TaskEditorComponent,
  TaskIconsComponent
};