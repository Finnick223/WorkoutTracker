//made it to check mocking if page render other things for logged in and not logged in user
//it seems not very useful but i'll leave it
import { render, screen, waitFor } from '@utils/tests/index';
import { server } from '@utils/tests/mocks/server';
import Home from './home.page';
import useAuthStatus from 'src/hooks/useAuth';
import { ErrorScreen } from 'src/modules/Home/ErrorScreen.component';
import { MockInstance } from 'vitest';

vi.mock('src/hooks/useAuth');
const mockedUseAuthStatus = useAuthStatus as unknown as MockInstance;

describe('Home Component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders the welcome screen when user is not logged in', async () => {
    mockedUseAuthStatus.mockReturnValue({
      isLoggedIn: false,
    });
    render(<Home />);

    expect(screen.getByText(/Welcome in Workout tracker/i)).toBeInTheDocument();
  });

  it('renders the user home page on logged in and connection with api', async () => {
    mockedUseAuthStatus.mockReturnValue({
      isLoggedIn: true,
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE3MjgzMjgwMjEsImV4cCI6MTcyODMzMTYyMX0.xd1jTvnrtMBJXCBxi6inGP9nyEVDv9ruREurQT4-D2Q',
    });
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText(/hi string, welcome back/i)).toBeInTheDocument();
    });
  });

  it('renders the error screen', async () => {
    render(<ErrorScreen />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
