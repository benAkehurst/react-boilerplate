export type Task = {
  task: string,
  externalId?: string,
  completed?: boolean,
  user?: string,
  createdOnDate?: string,
  createdOnTime?: string,
}

export type TaskProps = {
  tasks: Array<Task>;
}
