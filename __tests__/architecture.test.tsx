import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalHook: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseSomeExternalHook = (data) => {
    return { data, isLoading: false, error: null };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders DesignArchitecture component without errors', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    render(<DesignArchitecture />);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });

  test('handles loading state', async () => {
    // Mock the external dependency with loading
    useSomeExternalHook.mockImplementation(() => ({ data: null, isLoading: true, error: null }));

    render(<DesignArchitecture />);
    
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when an error occurs', async () => {
    // Mock the external dependency with error
    useSomeExternalHook.mockImplementation(() => ({ data: null, isLoading: false, error: 'An error occurred' }));

    render(<DesignArchitecture />);
    
    expect(await screen.findByText(/an error occurred/i)).toBeInTheDocument();
  });

  test('user interaction - button click', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    const mockFn = jest.fn();

    render(
      <DesignArchitecture>
        {({ data }) => (
          <>
            {data?.map(item => (
              <button key={item.id} onClick={() => mockFn(item)}>
                Click me
              </button>
            ))}
          </>
        )}
      </DesignArchitecture>
    );

    fireEvent.click(screen.getByText('Click me'));
    
    expect(mockFn).toHaveBeenCalled();
  });

  test('accessibility - screen reader', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    render(<DesignArchitecture />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveAttribute('aria-label');

    const button = screen.getAllByRole('button')[0];
    expect(button).toHaveAttribute('aria-label');
  });

  test('accessibility - keyboard navigation', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    render(<DesignArchitecture />);

    const button = screen.getAllByRole('button')[0];
    fireEvent.keyDown(button, { key: 'Enter' });
    
    expect(screen.getByText(/clicked/i)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalHook: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseSomeExternalHook = (data) => {
    return { data, isLoading: false, error: null };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders DesignArchitecture component without errors', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    render(<DesignArchitecture />);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });

  test('handles loading state', async () => {
    // Mock the external dependency with loading
    useSomeExternalHook.mockImplementation(() => ({ data: null, isLoading: true, error: null }));

    render(<DesignArchitecture />);
    
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when an error occurs', async () => {
    // Mock the external dependency with error
    useSomeExternalHook.mockImplementation(() => ({ data: null, isLoading: false, error: 'An error occurred' }));

    render(<DesignArchitecture />);
    
    expect(await screen.findByText(/an error occurred/i)).toBeInTheDocument();
  });

  test('user interaction - button click', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    const mockFn = jest.fn();

    render(
      <DesignArchitecture>
        {({ data }) => (
          <>
            {data?.map(item => (
              <button key={item.id} onClick={() => mockFn(item)}>
                Click me
              </button>
            ))}
          </>
        )}
      </DesignArchitecture>
    );

    fireEvent.click(screen.getByText('Click me'));
    
    expect(mockFn).toHaveBeenCalled();
  });

  test('accessibility - screen reader', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    render(<DesignArchitecture />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveAttribute('aria-label');

    const button = screen.getAllByRole('button')[0];
    expect(button).toHaveAttribute('aria-label');
  });

  test('accessibility - keyboard navigation', async () => {
    // Mock the external dependency
    useSomeExternalHook.mockImplementation(mockUseSomeExternalHook);

    render(<DesignArchitecture />);

    const button = screen.getAllByRole('button')[0];
    fireEvent.keyDown(button, { key: 'Enter' });
    
    expect(screen.getByText(/clicked/i)).toBeInTheDocument();
  });

});