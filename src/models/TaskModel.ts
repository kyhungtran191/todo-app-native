export interface TaskModel {
  title: string;
  description: string;
  dueDate: Date;
  start: string;
  uids: string[];
  color?: string;
  fileUrls?: string[];
}
