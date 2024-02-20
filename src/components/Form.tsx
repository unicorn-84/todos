import React from 'react';
import { ITodoChangeMethods } from '../types';
import clsx from 'clsx';

interface IFormProps extends Pick<ITodoChangeMethods, 'addTodo'>, React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const Form = React.forwardRef<HTMLInputElement, IFormProps>(
  ({ value, onChange, addTodo, className, ...props }, ref) => {
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    };

    return (
      <div
        className={clsx('flex items-center justify-center space-x-3 lg:space-x-4 mb-9 lg:mb-12', className)}
        {...props}
      >
        <input
          placeholder="Todo"
          value={value}
          onChange={onChange}
          ref={ref}
          onKeyDown={handleKeyDown}
          className="input input-bordered input-primary w-full"
        />
        <button onClick={addTodo} className="btn btn-primary">
          Add
        </button>
      </div>
    );
  },
);

Form.displayName = 'Form';

export default Form;
