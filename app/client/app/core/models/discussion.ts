import { Task } from './task';
import { User } from './user';
import { Tag } from './tag';

export interface Discussion {
  title: string;
  previousDiscussionId: string;
  tasks: Task[];
  date: Date;
  host: User;
  participants: User[];
  tags: Tag[];
  purpose: string;
  background: string;
  mainPoints: string[];
  mainPointsSum: string[];
  comments: Comment[];
}
