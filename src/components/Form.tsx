import React from 'react';
import type { ITodoChangeMethods } from '../types';
import clsx from 'clsx';

interface IFormProps
  extends Pick<ITodoChangeMethods, 'addTodo'>,
  React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const Form: React.FC<IFormProps> = ({
  value,
  onChange,
  addTodo,
  className,
  ...props
}) => {
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-center space-x-3 lg:space-x-4 mb-9 lg:mb-12',
        className,
      )}
      {...props}
    >
      <input
        placeholder="Enter your task"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="input input-bordered input-primary w-full"
      />
    </div>
  );
};

export default Form;
