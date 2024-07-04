import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../button';

describe('Button component', () => {
  test('renders the button with children', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the default type of button', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).not.toHaveAttribute('type', 'button');
  });

  test('applies the specified type', () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('does not call the onClick handler when disabled', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('applies the primary variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const buttonElement = screen.getByText(/primary/i);
    expect(buttonElement).toHaveClass(
      'bg-blue-500 text-white hover:bg-blue-700'
    );
  });

  test('applies the secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const buttonElement = screen.getByText(/secondary/i);
    expect(buttonElement).toHaveClass(
      'bg-gray-500 text-white hover:bg-gray-700'
    );
  });

  test('applies the danger variant styles', () => {
    render(<Button variant="danger">Danger</Button>);
    const buttonElement = screen.getByText(/danger/i);
    expect(buttonElement).toHaveClass('bg-red-500 text-white hover:bg-red-700');
  });

  test('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByText(/disabled/i);
    expect(buttonElement).toHaveClass('cursor-not-allowed opacity-50');
    expect(buttonElement).toBeDisabled();
  });
});
