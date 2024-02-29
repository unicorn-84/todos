import React from 'react';
import type { ITask } from '../types';
import clsx from 'clsx';

interface IItemProps extends React.HTMLAttributes<HTMLDivElement> {
  task: ITask;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const Item: React.FC<IItemProps> = ({
  task: { id, title, complete },
  removeTask,
  toggleTask,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between space-x-3 lg:space-x-4',
        {
          'opacity-30': complete,
        },
      )}
      {...props}
    >
      <label className="label cursor-pointer w-full justify-start space-x-3 lg:space-x-4 p-0">
        <input
          className="checkbox checkbox-primary checkbox-md lg:checkbox-lg"
          type="checkbox"
          checked={complete}
          onChange={() => {
            toggleTask(id);
          }}
        />
        <span
          className={clsx('text-3xl lg:text-4xl break-words leading-none', {
            'line-through': complete,
          })}
        >
          {title}
        </span>
      </label>
      <button
        onClick={() => {
          removeTask(id);
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
