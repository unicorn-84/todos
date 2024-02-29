interface ITodoChangeMethods {
  addTodo: () => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export default ITodoChangeMethods;
