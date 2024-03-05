import React, { useState } from 'react';
import { List } from '.';
import type { ITask } from '../types';
import { useLocalStorage } from '@uidotdev/usehooks';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useLocalStorage<ITask[]>('tasks', []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = (): void => {
    if (value !== '' && tasks.every(({ title }) => title !== value)) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        return {
          ...task,
          complete: !task.complete,
        };
      }),
    );
  };

  return (
    <div className="m-auto max-w-xl px-6 mt-12 lg:mt-24">
      <div className="flex items-center justify-center space-x-3 lg:space-x-4 mb-9 lg:mb-12">
        <input
          placeholder="Enter your task"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="input input-bordered input-primary w-full"
        />
      </div>
      {tasks.length > 0 && (
        <List tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
      )}
    </div>
  );
};

export default App;
