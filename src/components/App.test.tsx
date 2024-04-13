import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('should add a value to the list when press the "Enter" key', async () => {
    render(<App />);

    await userEvent.type(screen.getByRole('textbox'), 'Task{Enter}');

    expect(screen.getByRole('list')).toHaveTextContent('Task');
  });

  test('should not add an empty value to the list', async () => {
    render(<App />);

    await userEvent.type(screen.getByRole('textbox'), '{Enter}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  test('should not add a duplicate value to the list', async () => {
    render(<App />);

    await userEvent.type(screen.getByRole('textbox'), 'Task{Enter}');
    await userEvent.type(screen.getByRole('textbox'), 'Task{Enter}');

    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
  });

  test('should delete the task when click the "Delete" button', async () => {
    render(<App />);

    await userEvent.type(screen.getByRole('textbox'), 'Task{Enter}');
    await userEvent.click(screen.getByRole('button'));

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  test('should switch the task when click the checkbox', async () => {
    render(<App />);

    await userEvent.type(screen.getByRole('textbox'), 'Task{Enter}');
    await userEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByText('Task')).toHaveClass('line-through');
  });
});
