import Queueable from './interfaces/queueable.interface';
import Task from './interfaces/task.interface';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';


import SettingsService from './services/settings.service';
import TaskService from './services/task.service';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
  SettingsService,
  TaskService
];

const AUTH_PROVIDERS: any[] = [AuthGuard, AuthService];

export {
  Queueable,
  Task,

  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  SettingsService,
  TaskService,
  SHARED_PROVIDERS,

  AuthService,
  AuthGuard,
  AUTH_PROVIDERS
};
