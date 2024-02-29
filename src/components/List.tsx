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
  ...props
}) => {
  return (
    <ul className={clsx('space-y-4 lg:space-y-6')} {...props}>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default List;
