import CustomLink from './Link.component';
import { render, screen, waitFor } from '@utils/tests';
import userEvent from '@testing-library/user-event';

describe('Link component', () => {
  it('Should render correctly with required props', async () => {
    render(
      <CustomLink href="/home" color="inherit">
        Home
      </CustomLink>,
    );

    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
  });

  it('applies hover animation', async () => {
    render(
      <CustomLink href="/home" color="inherit">
        Home
      </CustomLink>,
    );
    const link = screen.getByRole('link', { name: /home/i });

    userEvent.hover(link);
    await waitFor(() => {
      expect(link).toHaveStyle({ color: 'rgb(128, 128, 128)' });
    });
  });

  it('renders children correctly', () => {
    render(
      <CustomLink href="/about" color="green">
        About Us
      </CustomLink>,
    );

    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });

  it('applies variant prop', () => {
    render(
      <CustomLink href="/home" color="blue" variant="body2">
        Home
      </CustomLink>,
    );

    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toHaveClass('MuiTypography-body2');
  });
});
