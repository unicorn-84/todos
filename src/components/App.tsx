import React, { useState } from 'react';
import { Form, List } from '.';
import type { ITodo } from '../types';
import { useLocalStorage } from '@uidotdev/usehooks';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (): void => {
    if (value !== '' && todos.every((todo) => todo.task !== value)) {
      setTodos([
        {
          todoId: Date.now(),
          task: value,
          complete: false,
        },
        ...todos,
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.todoId !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.todoId !== id) {
          return todo;
        }

        return {
          ...todo,
          complete: !todo.complete,
        };
      }),
    );
  };

  return (
    <div className="m-auto max-w-xl px-6 mt-12 lg:mt-24">
      <Form value={value} onChange={handleChange} addTodo={addTodo} />
      {
        todos.length > 0 && <List todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      }
    </div>
  );
};

export default App;
