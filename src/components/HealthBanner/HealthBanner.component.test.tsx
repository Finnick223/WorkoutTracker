import { render, screen } from '@testing-library/react';
import { HealthBanner } from './HealthBanner.component';
import {
  QueryObserverResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { vi } from 'vitest';

vi.mock('@tanstack/react-query');

describe('HealthBanner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the banner when the server status is not UP', async () => {
    vi.mocked(useQuery).mockReturnValue({
      data: { status: 'DOWN' },
      isSuccess: true,
      isLoading: false,
      isError: false,
      error: null,
      status: 'success',
      refetch: async () => ({}) as QueryObserverResult<unknown, unknown>,
    } as UseQueryResult);

    render(<HealthBanner />);

    expect(
      screen.getByText(/Our server is currently experiencing problems/i),
    ).toBeInTheDocument();
  });

  it('does not render the banner when the server status is UP', async () => {
    vi.mocked(useQuery).mockReturnValue({
      data: { status: 'UP' },
      isSuccess: true,
      isLoading: false,
      isError: false,
      error: null,
      status: 'success',
      refetch: async () => ({}) as QueryObserverResult<unknown, unknown>,
    } as UseQueryResult);

    render(<HealthBanner />);

    expect(
      screen.queryByText(/Our server is currently experiencing problems/i),
    ).not.toBeInTheDocument();
  });

  it('does render the banner while the query is loading', async () => {
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      isSuccess: false,
      isLoading: true,
      isError: false,
      error: null,
      status: 'pending',
      refetch: async () => ({}) as QueryObserverResult<unknown, unknown>,
    } as unknown as UseQueryResult);

    render(<HealthBanner />);

    expect(
      screen.queryByText(/Our server is currently experiencing problems/i),
    ).toBeInTheDocument();
  });
});
