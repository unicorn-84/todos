import { useState } from 'react';
import { Form, List } from '.';
import { ITodo } from '../types';
import { useLocalStorage } from '@uidotdev/usehooks';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          todoId: Date.now(),
          task: value,
          complete: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.todoId !== id));
  };

  const toggleTodo = (id: number) => {
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
    <div className="m-auto max-w-lg px-6">
      <h1 className="text-center font-bold text-3xl lg:text-4xl mt-9 lg:mt-12 mb-6 lg:mb-9">My Todos</h1>
      <Form value={value} onChange={handleChange} addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
