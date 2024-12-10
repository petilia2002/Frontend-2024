export type Task = {
  id?: number;
  type: 'bug' | 'task';
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'in-progress' | 'completed';
  title: string;
  description: string;
  assignee: string;
  creator: string;
  createdAt?: Date;
  updatedAt?: Date;
};
