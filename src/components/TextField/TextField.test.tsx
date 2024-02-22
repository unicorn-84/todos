import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { axe } from 'jest-axe';
import { afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import TextField from './TextField';

afterEach(() => {
  cleanup();
});

describe('TextField', () => {
  test('should be visible', async () => {
    render(<TextField />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<TextField />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should change a value', async () => {
    render(<TextField />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Task');
    expect(input).toHaveValue('Task');
  });
});
