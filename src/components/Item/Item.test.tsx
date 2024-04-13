import React from 'react';
import { render, screen } from '@testing-library/react';
import { type ITask } from '../../types';
import Item from '.';

const task: ITask = {
  id: 1,
  title: 'Task1',
  complete: true,
};

describe('Item', () => {
  test('should render correctly', () => {
    render(
      <Item
        data-testid="item"
        task={task}
        toggleTask={vi.fn()}
        removeTask={vi.fn()}
      />,
    );

    expect(screen.getByTestId('item')).toMatchSnapshot();
  });

  test('should render the task', () => {
    render(<Item task={task} toggleTask={vi.fn()} removeTask={vi.fn()} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Task1')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
