import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchProductData: jest.fn(() =>
    Promise.resolve({
      products: [
        { id: '1', name: 'Product 1', price: 10 },
        { id: '2', name: 'Product 2', price: 20 },
      ],
    })
  ),
}));

describe('Core Functionality Component Tests', () => {
  test('renders products correctly', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product 1/i)).toBeInTheDocument());
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  test('displays loading state while fetching data', async () => {
    const fetchProductData = jest.fn().mockReturnValue(Promise.resolve({ products: [] }));
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(fetchProductData).toHaveBeenCalled());
  });

  test('displays error message on data fetching failure', async () => {
    const fetchProductData = jest.fn().mockRejectedValue(new Error('Failed to load products'));
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    await waitFor(() =>
      expect(screen.getByText(/failed to load products/i)).toBeInTheDocument()
    );
  });

  test('allows adding items to cart', async () => {
    const addToCart = jest.fn();
    render(<CoreFunctionalityComponent addToCart={addToCart} />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(addToCart).toHaveBeenCalled();
  });

  test('handles edge case of empty product list', async () => {
    const fetchProductData = jest.fn().mockResolvedValue({ products: [] });
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    await waitFor(() =>
      expect(screen.getByText(/no products available/i)).toBeInTheDocument()
    );
  });

  test('ensures accessibility features are implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeVisible();
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(screen.queryByRole('alert')).toBeInTheDocument();
  });

  test('mocks external dependencies for testing', async () => {
    const fetchProductData = jest.fn().mockResolvedValue({ products: [] });
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    await waitFor(() =>
      expect(fetchProductData).toHaveBeenCalledWith('/api/products')
    );
  });

  test('tests keyboard navigation and focus', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    fireEvent.keyDown(container, { key: 'Tab' });
    const firstFocusableElement = screen.getByRole('button');
    expect(document.activeElement).toBe(firstFocusableElement);
  });

  test('validates form inputs and error handling', () => {
    const mockFn = jest.fn();
    render(<CoreFunctionalityComponent onSubmit={mockFn} />);
    fireEvent.submit(screen.getByRole('form'));
    expect(mockFn).toHaveBeenCalledWith({ name: '', quantity: '' });
    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('tests aria-live announcements for screen readers', () => {
    render(<CoreFunctionalityComponent />);
    const announcement = 'Product added to cart';
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('status')).toHaveTextContent(announcement);
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchProductData: jest.fn(() =>
    Promise.resolve({
      products: [
        { id: '1', name: 'Product 1', price: 10 },
        { id: '2', name: 'Product 2', price: 20 },
      ],
    })
  ),
}));

describe('Core Functionality Component Tests', () => {
  test('renders products correctly', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product 1/i)).toBeInTheDocument());
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  test('displays loading state while fetching data', async () => {
    const fetchProductData = jest.fn().mockReturnValue(Promise.resolve({ products: [] }));
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(fetchProductData).toHaveBeenCalled());
  });

  test('displays error message on data fetching failure', async () => {
    const fetchProductData = jest.fn().mockRejectedValue(new Error('Failed to load products'));
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    await waitFor(() =>
      expect(screen.getByText(/failed to load products/i)).toBeInTheDocument()
    );
  });

  test('allows adding items to cart', async () => {
    const addToCart = jest.fn();
    render(<CoreFunctionalityComponent addToCart={addToCart} />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(addToCart).toHaveBeenCalled();
  });

  test('handles edge case of empty product list', async () => {
    const fetchProductData = jest.fn().mockResolvedValue({ products: [] });
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    await waitFor(() =>
      expect(screen.getByText(/no products available/i)).toBeInTheDocument()
    );
  });

  test('ensures accessibility features are implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeVisible();
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(screen.queryByRole('alert')).toBeInTheDocument();
  });

  test('mocks external dependencies for testing', async () => {
    const fetchProductData = jest.fn().mockResolvedValue({ products: [] });
    render(<CoreFunctionalityComponent fetchProductData={fetchProductData} />);
    await waitFor(() =>
      expect(fetchProductData).toHaveBeenCalledWith('/api/products')
    );
  });

  test('tests keyboard navigation and focus', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    fireEvent.keyDown(container, { key: 'Tab' });
    const firstFocusableElement = screen.getByRole('button');
    expect(document.activeElement).toBe(firstFocusableElement);
  });

  test('validates form inputs and error handling', () => {
    const mockFn = jest.fn();
    render(<CoreFunctionalityComponent onSubmit={mockFn} />);
    fireEvent.submit(screen.getByRole('form'));
    expect(mockFn).toHaveBeenCalledWith({ name: '', quantity: '' });
    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('tests aria-live announcements for screen readers', () => {
    render(<CoreFunctionalityComponent />);
    const announcement = 'Product added to cart';
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('status')).toHaveTextContent(announcement);
  });
});