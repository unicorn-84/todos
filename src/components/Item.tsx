import React from 'react';
import type { ITodo, ITodoChangeMethods } from '../types';
import clsx from 'clsx';

interface IItemProps
  extends ITodo,
    Pick<ITodoChangeMethods, 'removeTodo' | 'toggleTodo'>,
    React.HTMLAttributes<HTMLDivElement> {}

const Item: React.FC<IItemProps> = ({
  todoId,
  task,
  complete,
  removeTodo,
  toggleTodo,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between space-x-3 lg:space-x-4',
        {
          'opacity-30': complete,
        },
        className,
      )}
      {...props}
    >
      <label className="label cursor-pointer w-full justify-start space-x-3 lg:space-x-4 p-0">
        <input
          className="checkbox checkbox-primary checkbox-md lg:checkbox-lg"
          type="checkbox"
          checked={complete}
          onChange={() => {
            toggleTodo(todoId);
          }}
        />
        <span
          className={clsx('text-3xl lg:text-4xl break-words leading-none', {
            'line-through': complete,
          })}
        >
          {task}
        </span>
      </label>
      <button
        onClick={() => {
          removeTodo(todoId);
        }}
        className="btn btn-warning btn-xs lg:btn-sm btn-square"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Item;
