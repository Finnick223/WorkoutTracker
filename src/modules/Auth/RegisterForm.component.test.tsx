import { render, screen, waitFor } from '@utils/tests/index';
import { describe, it, vi, expect } from 'vitest';
import RegisterForm from './RegisterForm.component';
import { server } from '@utils/tests/mocks/server';
import toast from 'react-hot-toast';
import userEvent from '@testing-library/user-event';
import {
  errorSignUp,
  successfulSignUp,
} from '@utils/tests/handlers/auth.handlers';

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

describe('RegisterForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form fields correctly', () => {
    render(<RegisterForm />);
    expect(
      screen.getByRole('textbox', { name: /First Name/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /Last Name/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(
      screen.getByLabelText('Password*', { selector: 'input' }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Repassword*', { selector: 'input' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radiogroup', { name: /Gender/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /I agree with terms/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up/i }),
    ).toBeInTheDocument();
  });

  it('submit button should be disabled if form is empty', async () => {
    render(<RegisterForm />);

    expect(screen.getByRole('button', { name: /sign up/i })).toBeDisabled;
  });

  it('displays validation errors when required fields are empty', async () => {
    render(<RegisterForm />);

    userEvent.click(screen.getByRole('textbox', { name: /First Name/i }));
    userEvent.click(screen.getByRole('textbox', { name: /Last Name/i }));
    userEvent.click(screen.getByRole('textbox', { name: /Email/i }));
    userEvent.click(screen.getByLabelText('Password*', { selector: 'input' }));
    userEvent.click(
      screen.getByLabelText('Repassword*', { selector: 'input' }),
    );

    expect(await screen.findByText('firstName must be at least 3 characters'))
      .toBeInTheDocument;
    expect(
      await screen.findByText('lastName must be at least 3 characters'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('email is a required field'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('password must be at least 6 characters'),
    ).toBeInTheDocument();
  });

  it('handles successful registration and shows notification', async () => {
    server.use(successfulSignUp);

    render(<RegisterForm />);

    await userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    await userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    await userEvent.type(
      screen.getByLabelText(/Email/i),
      'john.doe@example.com',
    );
    await userEvent.type(
      screen.getByLabelText('Password*', { selector: 'input' }),
      'password123',
    );
    await userEvent.type(
      screen.getByLabelText('Repassword*', { selector: 'input' }),
      'password123',
    );

    await userEvent.click(screen.getByLabelText('Male'));
    await userEvent.click(screen.getByLabelText(/I agree with terms/i));

    await userEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith('/Login');
    });
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        'Account created! You can login now',
      );
    });
  });

  it('displays error message on registration failure', async () => {
    server.use(errorSignUp);

    render(<RegisterForm />);

    await userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    await userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    await userEvent.type(
      screen.getByLabelText(/Email/i),
      'john.doe@example.com',
    );
    await userEvent.type(
      screen.getByLabelText('Password*', { selector: 'input' }),
      'password123',
    );
    await userEvent.type(
      screen.getByLabelText('Repassword*', { selector: 'input' }),
      'password123',
    );

    await userEvent.click(screen.getByLabelText('Male'));
    await userEvent.click(screen.getByLabelText(/I agree with terms/i));

    await userEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Something went wrong');
    });
  });
});
