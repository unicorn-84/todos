import React from 'react';
import clsx from 'clsx';
import { Item } from '.';
import type { ITodo, ITodoChangeMethods } from '../types';

interface IListProps
  extends Pick<ITodoChangeMethods, 'removeTodo' | 'toggleTodo'>,
  React.HTMLAttributes<HTMLUListElement> {
  todos: ITodo[]
}

const List: React.FC<IListProps> = ({
  todos,
  removeTodo,
  toggleTodo,
  className,
  ...props
}) => {
  return (
    <ul className={clsx('space-y-4 lg:space-y-6', className)} {...props}>
      {todos.map(({ todoId, task, complete }) => (
        <Item
          key={todoId}
          task={task}
          complete={complete}
          todoId={todoId}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default List;
