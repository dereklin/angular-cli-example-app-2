import { RouterConfig }  from '@angular/router';
import { TasksComponent, TaskEditorComponent, TaskDetailComponent } from './tasks';


export const tasksRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'task/editor',
    component: TaskEditorComponent
  }
];
