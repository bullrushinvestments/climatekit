import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledTimes
import React from 'react';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays initial loading state', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error state when there is an error', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error('Failed to load content'),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('displays content when data is loaded', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/test content/i)).toBeInTheDocument());
  });

  test('handles user interactions correctly', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(useExternalData).toHaveBeenCalled();
  });

  test('checks for accessibility features', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases for data length', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no content/i)).toBeInTheDocument();
  });

  test('validates form inputs on submission', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('form'));
    await waitFor(() => expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument());
  });

  test('mocks external dependencies correctly', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(useExternalData).toHaveBeenCalled();
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledTimes
import React from 'react';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays initial loading state', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error state when there is an error', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error('Failed to load content'),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('displays content when data is loaded', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/test content/i)).toBeInTheDocument());
  });

  test('handles user interactions correctly', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(useExternalData).toHaveBeenCalled();
  });

  test('checks for accessibility features', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases for data length', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no content/i)).toBeInTheDocument();
  });

  test('validates form inputs on submission', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('form'));
    await waitFor(() => expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument());
  });

  test('mocks external dependencies correctly', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '1', title: 'Test Content' }],
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(useExternalData).toHaveBeenCalled();
  });
});