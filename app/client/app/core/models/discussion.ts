import { Task } from './task';
import { User } from './user';
import { Tag } from './tag';

export interface Discussion {
  title: string;
  previousDiscussionId: string;
  priorTasks: Task[];
  continueTasks: Task[];
  date: Date;
  host: User;
  participants: User[];
  tags: string[];
  purpose: string;
  background: string;
  mainPoints: string[];
  mainPointsSum: string[];
  comments: Comment[];
}
