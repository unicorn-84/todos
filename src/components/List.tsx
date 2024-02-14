import clsx from 'clsx';
import { Item } from '.';
import { ITodo, ITodoChangeMethods } from '../types';

interface IListProps
  extends Pick<ITodoChangeMethods, 'removeTodo' | 'toggleTodo'>,
    React.HTMLAttributes<HTMLUListElement> {
  todos: ITodo[];
}

const List: React.FC<IListProps> = ({ todos, removeTodo, toggleTodo, className, ...props }) => {
  return (
    <ul className={clsx('space-y-3 lg:space-y-5', className)} {...props}>
      {todos.map(({ todoId, task, complete }) => (
        <Item
          key={todoId}
          task={task}
          complete={complete}
          todoId={todoId}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default List;
