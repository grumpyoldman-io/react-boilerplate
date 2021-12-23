import { render, screen } from '@testing-library/react';
import Button from './';

describe('Component: Button', () => {
  it('should render a button', () => {
    render(<Button>Test Button</Button>);

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});
