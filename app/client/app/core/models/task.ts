import { User } from './user';

export interface Task {
  finished: boolean;
  responsible: User;
  startDate: Date;
  endDate: Date;
}
