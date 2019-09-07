import { Task } from './task';
import { Comment } from './comment';

export interface Discussion {
  title: string;
  previousDiscussionId: string;
  priorTasks: Task[];
  continueTasks: Task[];
  date: Date;
  host: string;
  participants: string[];
  tags: string[];
  purpose: string;
  background: string;
  mainPoints: string;
  mainPointsSum: string;
  comments: Comment[];
}
