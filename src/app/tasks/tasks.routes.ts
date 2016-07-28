import { RouterConfig }  from '@angular/router';
import { TasksComponent, TaskEditorComponent, TaskDetailComponent } from './tasks';
import { AuthGuard } from '../shared/shared';


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
    component: TaskEditorComponent,
    canActivate: [AuthGuard]
  }
];
