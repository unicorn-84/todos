import React from 'react';
import { Item } from '..';
import type { ITask } from '../../types';

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
    tasks.length > 0 && (
      <ul className="space-y-4 lg:space-y-6" {...props}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Item task={task} removeTask={removeTask} toggleTask={toggleTask} />
          </li>
        ))}
      </ul>
    )
  );
};

export default List;
