import { Discussion } from './discussion';
import { User } from './user';

export interface Project {
  title: string;
  participants: string[];
  startDate: Date;
  endDate: Date;
  discussions: Discussion[];
}
