export interface Task {
  finished: boolean;
  responsible: string;
  startDate: Date;
  endDate: Date;
  jiraLink: string;
  summary: string;
}
