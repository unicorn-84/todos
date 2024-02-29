import React from 'react';
import clsx from 'clsx';
import { Item } from '.';
import type { ITask } from '../types';

interface IListProps extends React.HTMLAttributes<HTMLUListElement> {
  tasks: ITask[];
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const List: React.FC<IListProps> = ({
  tasks,
  removeTask,
  toggleTask,
  className,
  ...props
}) => {
  return (
    <ul className={clsx('space-y-4 lg:space-y-6', className)} {...props}>
      {tasks.map(({ taskId, taskTitle, taskComplete }) => (
        <Item
          key={taskId}
          taskTitle={taskTitle}
          taskComplete={taskComplete}
          taskId={taskId}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default List;
