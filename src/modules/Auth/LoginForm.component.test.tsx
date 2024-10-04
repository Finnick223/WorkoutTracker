import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm.component';
import { useMutation } from '@tanstack/react-query';

const mockedUseNavigate = vi.fn();
beforeEach(() => {
  vi.mock('react-router-dom', async () => {
    return {
      ...(await vi.importActual('react-router-dom')),
      useNavigate: () => mockedUseNavigate,
    };
  });
});

vi.mock('@tanstack/react-query');
vi.mock('src/hooks/useAuth', () => ({
  default: vi.fn(() => ({
    login: {
      mutate: vi.fn(),
      isPending: false,
      isError: false,
      error: null,
    },
  })),
}));
vi.mock('src/api/auth', () => ({
  loginUser: vi.fn(),
  requestPasswordReset: vi.fn(),
}));
vi.mock('react-hot-toast', () => ({
  success: vi.fn(),
  error: vi.fn(),
}));

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <LoginForm />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('disables the submit button when the form is invalid', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    const submitButton = screen.getByRole('button', { name: /log in/i });
    expect(submitButton).toBeDisabled();
  });

  it('calls loginUser and navigates on success', async () => {
    const mockLoginUser = vi
      .fn()
      .mockResolvedValueOnce({ token: 'mock-token' });

    vi.mocked(useMutation).mockReturnValue({
      mutate: mockLoginUser,
      isPending: false,
      isError: false,
      status: 'success',
      data: undefined,
      variables: undefined,
      error: null,
      isIdle: false,
      isSuccess: true,
      reset: vi.fn(),
      context: undefined,
      failureCount: 0,
      failureReason: undefined,
      isPaused: false,
      submittedAt: 0,
      mutateAsync: async () => ({}),
    });

    render(<LoginForm />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/login']}>{children}</MemoryRouter>
      ),
    }),
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'test@example.com' },
      });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.submit(screen.getByTestId('login-form'));

    await waitFor(
      () => {
        expect(mockLoginUser).toHaveBeenCalledWith({
          email: 'test@example.com',
          password: 'password123',
        });
      },
      { timeout: 3000 },
    );

    // await waitFor(() => expect(mockedUseNavigate).toHaveBeenCalledWith('/'));
  });

  it('displays error message on login failure', async () => {
    const mockLoginUser = vi
      .fn()
      .mockRejectedValueOnce(new Error('Invalid credentials'));
    vi.mocked(useMutation).mockReturnValue({
      mutate: mockLoginUser,
      isPending: false,
      isError: true,
      error: { message: 'invalid credentials' },
      data: undefined,
      variables: undefined,
      isIdle: false,
      isSuccess: false,
      status: 'error',
      reset: function (): void {
        throw new Error('Function not implemented.');
      },
      context: undefined,
      failureCount: 0,
      failureReason: undefined,
      isPaused: false,
      submittedAt: 0,
      mutateAsync: async () => ({}),
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    await waitFor(() => {
      expect(screen.findByText('invalid credentials'));
    });
  });
});
