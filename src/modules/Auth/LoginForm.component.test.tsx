import { render, screen, waitFor } from '@utils/tests/index';
import { describe, it, vi, expect } from 'vitest';
import LoginForm from './LoginForm.component';
import { server } from '@utils/tests/mocks/server';
import userEvent from '@testing-library/user-event';
import {
  errorSignIn,
  successfulSignIn,
} from '@utils/tests/handlers/auth.handlers';
import toast from 'react-hot-toast';

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  return {
    ...(await vi.importActual('react-router-dom')),
    useNavigate: () => mockedUseNavigate,
  };
});
vi.mock('react-hot-toast', async () => {
  const originalModule = await vi.importActual('react-hot-toast');

  return {
    ...originalModule,
    default: {
      success: vi.fn(),
      error: vi.fn(),
    },
    success: vi.fn(),
    error: vi.fn(),
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(
      screen.getByLabelText('Password*', { selector: 'input' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('disables the submit button when the form is invalid', () => {
    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /log in/i });
    expect(submitButton).toBeDisabled();
  });

  it('handles logging, shows notification and navigates on success', async () => {
    server.use(successfulSignIn);

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(
      screen.getByLabelText('Password*', { selector: 'input' }),
      'password123',
    );

    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    expect(emailInput.value).toBe('test@example.com');

    const passwordInput = screen.getByLabelText('Password*', {
      selector: 'input',
    }) as HTMLInputElement;
    expect(passwordInput.value).toBe('password123');

    await userEvent.click(screen.getByRole('button', { name: /log in/i }));

    expect(mockedUseNavigate).toHaveBeenCalledWith('/');
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Logged in successfully');
    });
  });

  it('displays error message on login failure', async () => {
    server.use(errorSignIn);

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(
      screen.getByLabelText('Password*', { selector: 'input' }),
      'password123',
    );
    await userEvent.click(screen.getByRole('button', { name: /log in/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Try other credentials');
    });
  });
});
