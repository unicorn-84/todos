import React, { useState } from 'react';
import { Form, List } from '.';
import type { ITask } from '../types';
import { useLocalStorage } from '@uidotdev/usehooks';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useLocalStorage<ITask[]>('tasks', []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
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
      <Form value={value} onChange={handleChange} addTask={addTask} />
      {tasks.length > 0 && (
        <List tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
      )}
    </div>
  );
};

export default App;
