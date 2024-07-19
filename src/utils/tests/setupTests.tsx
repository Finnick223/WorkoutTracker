import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { afterAll, afterEach, beforeAll, expect, vitest } from 'vitest';
import { server } from './mocks/server';

expect.extend(matchers);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vitest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vitest.fn(),
    dispatchEvent: vitest.fn(),
  })),
});

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: vitest.fn().mockReturnValue({
    observe: vitest.fn(),
    unobserve: vitest.fn(),
    disconnect: vitest.fn(),
  }),
});

server.events.on('request:start', ({ request }) => {
  console.log('Outgoing:', request.method, request.url);
});

beforeAll(() => server.listen()); // Enable the mocking in tests.
afterEach(() => server.resetHandlers()); // Reset any runtime handlers tests may use.
afterAll(() => server.close()); // Clean up once the tests are done.
