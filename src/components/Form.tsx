import React from 'react';
import clsx from 'clsx';

interface IFormProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  addTask: () => void;
}

const Form: React.FC<IFormProps> = ({
  value,
  onChange,
  addTask,
  className,
  ...props
}) => {
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTask();
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
