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
    if (value !== '' && tasks.every(({ taskTitle }) => taskTitle !== value)) {
      setTasks([
        ...tasks,
        {
          taskId: Date.now(),
          taskTitle: value,
          taskComplete: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter(({ taskId }) => taskId !== id));
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task) => {
        if (task.taskId !== id) {
          return task;
        }

        return {
          ...task,
          taskComplete: !task.taskComplete,
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
