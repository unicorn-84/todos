import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '.';
import { type ITask } from '../../types';

const tasks: ITask[] = [
  {
    id: 1,
    title: 'Task1',
    complete: true,
  },
  {
    id: 2,
    title: 'Task2',
    complete: false,
  },
];

describe('List', () => {
  test('should render correctly', () => {
    render(<List tasks={tasks} toggleTask={vi.fn()} removeTask={vi.fn()} />);

    expect(screen.getByRole('list')).toMatchSnapshot();
  });

  test('should render the list of tasks', () => {
    render(<List tasks={tasks} toggleTask={vi.fn()} removeTask={vi.fn()} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  test('should not render the empty list', () => {
    render(<List tasks={[]} toggleTask={vi.fn()} removeTask={vi.fn()} />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
